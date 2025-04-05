# packages
library(httr)
library(openxlsx)
library(rvest)
library(tidyverse)

# consts
product_names <- c(
  "total",
  "goods",
  "services"
  )

sheet_names <- c(
  "1 Total Trade by Country - A",
  "3 TiG by Country - A",
  "5 TiS by Country - A"
  )

country_names_loc <- "src/data/country-names.csv"

url_ons_TQ <- paste0(
  "https://www.ons.gov.uk/economy/nationalaccounts/balanceofpayments/datasets/",
  "uktotaltradeallcountriesseasonallyadjusted/data")

link_bit <- "/tradequarterlyq224seasonallyadjustedfinal1.xlsx"

# functions
get_web_page <- function(url) {

  web_page_ <- url %>%
    jsonlite::fromJSON() %>%
    purrr::pluck("datasets") %>%
    purrr::pluck("uri") %>%
    purrr::pluck(1)

  return(web_page_)

}

clean_trade_data <- function(file_path, sheet_name, product_name) {
  
  df_ <- openxlsx::read.xlsx(
      file_path,
      sheet = sheet_name,
      startRow = 4
    ) %>%
    dplyr::rename(
      ISO2 = Country.Code,
      Countries = Country
      ) %>%
    dplyr::filter(!is.na(Countries)) %>%
    dplyr::ungroup() %>%
    dplyr::mutate(
      row_id = dplyr::row_number(),
      imports_line = dplyr::if_else(
        ISO2 == "Country Code", row_id, NA_integer_
      )
    ) %>%
    tidyr::fill(imports_line, .direction = "updown") %>%
    mutate(
      flow = dplyr::if_else(
          row_id < imports_line,
          paste0(product_name, "_export"),
          paste0(product_name, "_import"),
          missing = NA_character_
        )
      ) %>%
    dplyr::filter(!is.na(`ISO2`)) %>%
    dplyr::filter(`ISO2` != "-") %>%
    dplyr::select(-c("row_id", "imports_line")) %>%
    tidyr::pivot_longer(
      names_to = "Year",
      values_to = "Million",
      -c("ISO2", "Countries", "flow")) %>%
    dplyr::mutate(Million = as.numeric(Million))

  return(df_)

}

# reading

## Country Names
country_names <- readr::read_csv(
  country_names_loc,
  show_col_types = FALSE,
  na = ""
  )

## Trade Data
web_page <- get_web_page(url_ons_TQ)

file_paths <- read_html(paste0('https://www.ons.gov.uk', web_page)) %>%
  html_elements('a[href$=".xlsx"]') %>%
  html_attr("href")
file_path <- paste0('https://www.ons.gov.uk', file_paths[1])

# processing
ons_trade_annual <- product_names %>%
  seq_along() %>%
  purrr::map(\(x) { clean_trade_data(file_path, sheet_names[x], product_names[x]) }) %>%
  purrr::reduce(dplyr::bind_rows) %>%
  dplyr::filter(Countries != "Country") %>%
  left_join(country_names, by = "ISO2") %>%
  select(Country, ISO2, ISO3, Year, flow, Million)

# stdout
ons_trade_annual %>% format_csv() %>% cat()
