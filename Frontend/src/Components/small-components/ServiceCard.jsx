import React from "react";
import styled from "styled-components";

const ServiceCard = ({ innerText }) => {
  return (
    <Wrapper>
      <p>{innerText}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    text-transform: uppercase;
    font-weight: bold;
    width: 30rem;
    /* border: 3px solid #ffc93c; */
    border: 3px solid #0081c9;
    text-align: center;
    font-size: 2rem;
    border-radius: 1rem;
    background: white;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    color: #0081c9;
  }
  p:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
`;

export default ServiceCard;
