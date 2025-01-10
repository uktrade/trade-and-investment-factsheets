import argparse
import csv
import sys

from jinja2 import Environment, FileSystemLoader, select_autoescape

# Get slug of country
parser = argparse.ArgumentParser()
parser.add_argument('--country')
args = parser.parse_args()

# Get matching country row (some countries are duplicated, but choosing the one with ISO3 should be safe
with open('src/data/country-names.csv', newline='') as csvfile:
    countries = list(csv.DictReader(csvfile))
country = next(country for country in countries if country['Display'] == args.country and country['ISO3'] != '')

# Process template to output md file for this country
environment = Environment(
	loader=FileSystemLoader("src/"),
	autoescape=select_autoescape(enabled_extensions=('.jinja')),
)
template = environment.get_template('partners/[country].md.jinja')
sys.stdout.buffer.write(template.render(
	country=country,
).encode('utf-8'))
