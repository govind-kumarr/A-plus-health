import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartProduct from "./component/CartProduct";
import { givePrice } from "./component/utils";

const Cart = () => {
  const { cart } = useSelector((state) => state.CartReducer);
  const [total, setTotal] = useState(0);
  const [final, setFinal] = useState(0);

  let localTotal = 0,
    finalTotal = 0;
  cart.forEach((product) => {
    finalTotal += givePrice(product.discount_price);
    localTotal += givePrice(product.original_price);
  });
  console.log(localTotal, finalTotal);
  return (
    <Wrapper>
      <section className="section_cart">
        <span className="section_cart_heading">order summary</span>
        <div className="cart_products">
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="payment_section"></div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 9rem;
  /* border: 1px solid blue; */

  .section_cart {
    max-width: 120rem;
    border: 1px solid #0081c9;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .section_cart_heading {
    /* border: 1px solid red; */
    grid-column: 1/-1;
    /* display: block; */
    text-align: left;
    /* margin: auto; */
    font-size: 3rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem 2rem;
    color: #ffc93c;
  }
  .cart_products {
    grid-column: 1 / span 3;
    border: 1px solid red;
    height: 50vh;
    display: flex;
    flex-direction: column;
  }
  .payment_section {
    border: 1px solid red;
  }
`;
export default Cart;
