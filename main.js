const date = "20231001";
const time_period = "q";
const url = new URL(
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank",
);

url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");

console.log(url.href);