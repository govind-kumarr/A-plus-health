import React from "react";
import styled from "styled-components";
import data from "../data/mockdb";
import ProductSlider from "./ProductSlider/ProductSlider";

const ProductRange = () => {
  return (
    <Wrapper>
      <section className="section_productRange">
        <span className="section_product_range_heading">Our Product Range</span>
        <ProductSlider data={data.slice(0, 10)} title={"Ayush Products"} />
        <ProductSlider
          data={data.slice(10, 20)}
          title={"Vitamins And Supplements"}
        />
        <ProductSlider data={data.slice(20, 30)} title={"Cough & Cold"} />
        <ProductSlider data={data.slice(30, 40)} title={"Fitness"} />
        <ProductSlider data={data.slice(45, 60)} title={"Sexual Wellness"} />
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .section_productRange {
    max-width: 120rem;
    margin: auto;
  }
  .section_product_range_heading {
    display: block;
    text-align: center;
    margin: 3rem auto;
    font-size: 3rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #ffc93c;
  }
`;
export default ProductRange;
