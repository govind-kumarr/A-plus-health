import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import "./styles/upperslider.css";
import images from "../assets/upper_carousal_images";

const UpperSlder = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        className="upper_slider"
        // autoPlay={true}
        // infinite={true}
        arrows={false}
        showDots={true}
      >
        {images.map((img, ind) => {
          return <img key={ind} src={img} alt={img} className="image image1" />;
        })}
      </Carousel>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 60vh;
  max-width: 120rem;
  margin: 3rem auto;
  margin-top: 8rem;
  /* padding: 1rem 0rem; */
  /* border: 1px solid red; */
  .upper_slider {
    height: 100%;
  }
  .upper_slider img {
    height: 100%;
  }
`;

export default UpperSlder;
