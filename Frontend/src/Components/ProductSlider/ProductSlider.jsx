import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../small-components/ProductCard";
const ProductSlider = ({ data, title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // let mock = new Array(5).fill(-1);
  return (
    <Wrapper>
      <span className="slider_title">{title}</span>
      <Carousel responsive={responsive}>
        {data.map((product, ind) => (
          <ProductCard key={ind} data={product} />
        ))}
      </Carousel>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .slider_title {
    display: block;
    text-align: center;
    margin: 1rem auto;
    font-size: 2rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #5bc0f8;
  }
  margin: 1rem;
`;
export default ProductSlider;
