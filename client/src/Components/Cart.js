import React from "react";
import styled from "styled-components";

const Cart = ({
  name,
  handleNameChange,
  quantity,
  handleQuantityChange,
  currency,
  handleCurrencyChange,
  price,
  handlePriceChange,
  handleSubmit
}) => {
  return (
    <Wrapper method="POST" onSubmit={e => handleSubmit(e)}>
      <Field>
        <Label htmlFor="name">Name</Label>
        <Name
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
      </Field>

      <Field>
        <Label htmlFor="quantity">Quantity</Label>
        <Quantity
          type="number"
          min={1}
          defaultValue={quantity}
          placeholder="Quantity"
          onChange={handleQuantityChange}
          required
        />
      </Field>

      <Field>
        <CurrencyWrapper value={currency} onChange={handleCurrencyChange}>
          <Currency value="USD">USD</Currency>
          <Currency value="RUB">RUB</Currency>
          <Currency value="EUR">EUR</Currency>
        </CurrencyWrapper>
      </Field>

      <Field>
        <Label htmlFor="price">Price</Label>
        <Price
          type="number"
          min="0"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
          required
        />
      </Field>

      <Count onClick={e => handleSubmit}>Посчитать</Count>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.form`
  margin-top: 20px;

  input[type="text"],
  input[type="number"] {
    padding: 10px;
    width: 100%;
    border: none;
    background: #ff7979;
    color: #ffffff;
    font-size: 16px;

    &::placeholder {
      color: #dff9fb;
    }
  }
`;

const Field = styled.div`
  margin-bottom: 40px;
`;
const Label = styled.label`
  display: inline-block;
  font-size: 16px;
  padding-bottom: 10px;
`;
const Name = styled.input``;
const Quantity = styled.input``;
const CurrencyWrapper = styled.select`
  padding: 10px;
  border: none;
  border-radius: 3px;
  background: #f9ca24;
  cursor: pointer;
  font-size: 16px;
`;
const Currency = styled.option``;
const Price = styled.input``;

const Count = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: #e056fd;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background: #badc58;
    color: #000000;
  }
`;

export default Cart;
