import React from "react";
import styled from "styled-components";
import BookApointment from "../Components/BookApointment";
import ProductRange from "../Components/ProductRange";
import Services from "../Components/Services";
import UpperSlder from "../Components/UpperSlder";

const Home = () => {
  return (
    <Wrapper>
      <UpperSlder />
      <Services />
      <BookApointment />
      <ProductRange />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: #ededed; */
  padding: 2rem 0rem;
`;

export default Home;
