const express = require("express");
const chalk = require("chalk");
const axios = require("axios");

// Variables
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// API
app.post("/", async (req, res) => {
  // Получаем данные от клиента
  const { name, quantity, currency, price } = req.body;

  // Делаем запрос
  const response = await axios.get(
    "https://www.cbr-xml-daily.ru/daily_json.js"
  );

  // Pulling валюту для подсчёта суммы
  const valute = response.data.Valute[currency.toUpperCase()]; // ID, NumCode, CharCode, Nominal, Name, Value, Previous

  // Получаем сумму всех товаров
  const sum = price * quantity;
  const total = sum.toFixed(2) * valute.Value.toFixed(2);

  res.json({ total });
});

app.listen(port, _ =>
  console.log(chalk.yellow.bold(`\nThe server is running on port: ${port}`))
);
