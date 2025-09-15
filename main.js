// Константи для варіанту 6
const date = "20231001";       // 1 жовтня 2023 (формат YYYYMMDD)
const time_period = "q";       // квартал

// Створюємо об'єкт URL
const url = new URL("https://bank.gov.ua/NBU_Statistics/Opendata/api/Financial_Soundness");

// Додаємо параметри через searchParams
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");

// Виводимо готовий URL
console.log("Сформований URL:");
console.log(url.toString());
