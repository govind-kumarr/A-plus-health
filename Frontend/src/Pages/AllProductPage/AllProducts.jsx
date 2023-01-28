import React from "react";
import styled from "styled-components";
import ProductCard from "../../Components/small-components/ProductCard";
import data from "../../data/mockdb";

const AllProducts = () => {
  return (
    <Wrapper className="wrapper">
      <div className="product_list_header">
        <span className="header_box category">All Health Products</span>
      </div>
      <div className="product_list">
        {data.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 80%;
  padding: 0rem 5rem;
  margin: 9rem auto;
  /* border: 1px solid red; */
  //!Product List Header Styles
  .product_list_header {
    background-color: #0081c9;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
  }

  .category {
    text-transform: uppercase;
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }
  //!Product List Styled
  .product_list {
    width: 100%;
    border: 1px solid #0081c9;
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 2rem;
  }
  @media (max-width: 1100px) {
    width: 100%;
    .product_list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 720px) {
    width: 100%;
    .product_list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 480px) {
    padding: 0rem 1rem;
    .category {
      font-size: 1.5rem;
    }
    .product_list {
      grid-template-columns: repeat(1, 1fr);
      padding: 20px 10px;
      width: 100%;
    }
  }
`;
export default AllProducts;
