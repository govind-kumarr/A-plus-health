import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };
  return (
    <Wrapper>
      <div className="cart_product">
        <div className="cart_product_img">
          <img
            className="product_image"
            src={product.product_img_src}
            alt={product.product_name}
          />
        </div>
        <div className="cart_product_desc">
          <div className="title_brand">
            <span className="cart_product_title">{product.product_name}</span>
            <span className="cart_product_brand">
              <i>{product.brand}</i>
            </span>
          </div>
          <div className="price_qty_box">
            <span className="fPrice">{product.discount_price}</span>
            <span className="oPrice">
              <del>{product.original_price}</del>
            </span>
          </div>
          <div className="remove_later">
            <button className="btn remove" onClick={() => removeProduct()}>
              remove
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* padding: 2rem; */
  .cart_product {
    border: 1px solid #0081c9;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .cart_product_desc {
    /* border: 1px solid #0081c9; */
    width: 90%;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    .title_brand {
      /* border: 1px solid red; */
      span {
        display: block;
      }
      span.cart_product_title {
        font-size: 2rem;
        font-weight: 500;
      }
      span.cart_product_brand {
        font-size: 1.7rem;
        color: grey;
      }
    }
    .price_qty_box {
      /* border: 1px solid red; */
      span.fPrice {
        font-weight: bold;
        color: #5bc0f8;
        font-size: 1.8rem;
      }
      span.oPrice {
        color: grey;
        font-size: 1.5rem;
        margin: 0rem 1.5rem;
        font-weight: bold;
      }
    }
    .remove_later {
      align-self: flex-end;
      display: flex;
      gap: 1rem;
    }
  }

  .btn {
    background: #0081c9;
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: capitalize;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
  }
  .remove {
    background: red;
  }
`;
export default CartProduct;
