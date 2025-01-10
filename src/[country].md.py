import sys

from jinja2 import Environment, FileSystemLoader, select_autoescape

environment = Environment(
	loader=FileSystemLoader("src/"),
	autoescape=select_autoescape(enabled_extensions=('.jinja')),
)
template = environment.get_template('[country].md.jinja')
sys.stdout.buffer.write(template.render().encode('utf-8'))
