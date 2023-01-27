import React from "react";
import styled from "styled-components";

const ProductCard = () => {
  let data = {
    product_img_src:
      "https://www.netmeds.com/images/product-v1/150x150/859708/omron_compressor_nebulizer_ne_c101_0.jpg",
    discount_percent: "20% OFF",
    product_name: "Omron Compressor Nebulizer",
    brand: "Mkt: Omron Healthcare Co Ltd",
    discount_price: "Rs. 1,904.00",
    original_price: "Rs. 2,380.00",
    category: "device",
    dev_cat: "breathing",
  };
  return (
    <Wrapper>
      <div className="product_card">
        <div className="product_image">
          <img src={data.product_img_src} alt={data.product_name} />
        </div>
        <span className="product_title">{data.product_name}</span>
        <span className="product_manufact">
          <i>{data.brand}</i>
        </span>
        {/* <span className="product_category">{data.category}</span> */}
        <span className="product_fPrice">{data.discount_price}</span>
        <span className="product_oPrice">
          <del>{data.original_price}</del>
        </span>
        <button className="btn addtocart">add to cart</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .product_card {
    /* border: 1px solid red; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0rem 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
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
`;
export default ProductCard;
