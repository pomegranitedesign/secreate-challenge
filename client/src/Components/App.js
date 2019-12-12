import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

import Cart from "./Cart";

const App = props => {
  // Настраиваем состояние
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currency, setCurrency] = useState("EUR");
  const [price, setPrice] = useState(1.0);
  const [total, setTotal] = useState(0);

  // Helpers
  const handleNameChange = e => setName(e.target.value);
  const handleQuantityChange = e =>
    setQuantity(Math.round(parseInt(e.target.value)));
  const handleCurrencyChange = e => setCurrency(e.target.value);
  const handlePriceChange = e => setPrice(e.target.value);
  const emptyFields = _ => {
    setName("");
    setQuantity(1);
    setPrice(1);
  };

  // Функционал для отправки формы на сервер
  const handleSubmit = async e => {
    e.preventDefault();

    const data = { name, quantity, currency, price };
    const result = await axios.post("http://localhost:5000/", { ...data });
    setTotal(result.data.total);
    emptyFields();
  };

  // Задаём знак в зависимости от того какой currency
  let currencySign = "";
  if (currency === "USD") {
    currencySign = "$";
  } else if (currency === "RUB") {
    currencySign = "Р";
  } else if (currency === "EUR") {
    currencySign = "€";
  }

  return (
    <Container>
      <Row>
        <Col>
          <Cart
            name={name}
            handleNameChange={handleNameChange}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            currency={currency}
            handleCurrencyChange={handleCurrencyChange}
            price={price}
            handlePriceChange={handlePriceChange}
            handleSubmit={handleSubmit}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Total>
            Total: {total}
            {currencySign}
          </Total>
        </Col>
      </Row>
    </Container>
  );
};

// Styled components
const Total = styled.h1`
  margin-top: 30px;
  font-weight: 800;
  font-size: 24px;
`;

export default App;
