library(dplyr)
library(readxl)
library(httr)
library(tidyverse)
library(stringr)
library(RCurl)
library(jsonlite)
library(utils)
library(XML)

product <- c("total", "goods", "services")
sheet_names <- c("1 Total Trade by Country - A", "3 TiG by Country - A", "5 TiS by Country - A")

SITCcodes <- read_excel("src/data/sitc-codes.xlsx", skip = 1)
SITCcodes %>% filter(Keep == "Y") -> twodigits
SITCcodes %>% filter(Toptier == "Y") -> onedigit

country_names <- read.csv("src/data/country-names.csv", stringsAsFactors = FALSE, na.strings = "")

url_ons_TQ <- paste0(
  "https://www.ons.gov.uk/economy/nationalaccounts/balanceofpayments/datasets/",
  "uktotaltradeallcountriesseasonallyadjusted/data")
webpage <- fromJSON(url_ons_TQ)
webpage <- webpage$datasets$uri[1]
linkbit <- "/tradequarterlyq224seasonallyadjustedfinal1.xlsx"

url_ons_TQ <- paste0("https://www.ons.gov.uk/file?uri=", webpage, linkbit)
invisible(GET(url_ons_TQ, write_disk(tf <- file.path(tempdir(), "temp_file.xlsx"), 
                           overwrite = T)))

ons_trade_annual <- data.frame()

for (i in seq(1,3)){
  df <- read_excel(tf, sheet = sheet_names[i], skip = 3)
  colnames(df)[1] <- "ISO2"
  colnames(df)[2] <- "Countries"
  df <- filter(df, !is.na(Countries))
  imports_line <- which(df[,1] == "Country Code")
  ending_line <- dim(df)[1]
  
  df$flow <- NA
  df$flow <- as.character(df$flow)
  df[imports_line:ending_line,'flow'] <- paste0(product[i],"_import") 
  df[1:(imports_line-1),'flow'] <-  paste0(product[i],"_export")
  
  df <- filter(df, !is.na(`ISO2`))
  df <- filter(df, `ISO2` != "-")
  df <- pivot_longer(data = df, names_to = "Year", values_to = "Million", -c("ISO2","Countries", "flow"))
  df$Million <- as.numeric(df$Million)
  
  ons_trade_annual <- rbind(ons_trade_annual, df) 
}

ons_trade_annual <- filter(.data = ons_trade_annual, Countries != "Country")
ons_trade_annual %>% left_join(country_names, by = "ISO2") %>%
  select(Country, ISO2, ISO3, Year, flow, Million) -> ons_trade_annual
ons_trade_annual %>% pivot_wider(names_from = flow, values_from = Million) -> ons_NSA_trade_annual

cat(format_csv(ons_trade_annual))
