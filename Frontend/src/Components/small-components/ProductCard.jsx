import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: data });
    navigate("/cart");
  };
  return (
    <Wrapper>
      <div
        className="product_card"
        onClick={() => {
          // navigate(`/products/${data.id}`);
        }}
      >
        <div className="product_image">
          <img src={data.product_img_src} alt={data.product_name} />
        </div>
        <span className="product_title">
          {data.product_name && data.product_name.slice(0, 30)}
        </span>
        <span className="product_manufact">
          <i>{data.brand}</i>
        </span>
        {/* <span className="product_category">{data.category}</span> */}
        <span className="product_fPrice">{data.discount_price}</span>
        <span className="product_oPrice">
          <del>{data.original_price}</del>
        </span>
        <button className="btn addtocart" onClick={() => addToCart()}>
          add to cart
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .product_card {
    border: 2px solid #0081c9;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0rem 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    height: 40rem;
  }
  .product_card span {
    display: block;
  }
  .product_title {
    font-size: 1.8rem;
    font-weight: bold;
    align-self: flex-start;
  }
  .product_manufact {
    font-size: 1.4rem;
    color: grey;
    font-weight: 500;
  }
  .product_fPrice {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .product_oPrice {
    font-size: 1.6rem;
    font-weight: bold;
    color: grey;
  }
  .btn {
    background: #0081c9;
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: capitalize;
    text-align: center;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
  }
  .btn:hover {
    background: #86e5ff;
  }
`;
export default ProductCard;
