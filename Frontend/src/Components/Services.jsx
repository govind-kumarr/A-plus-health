import React from "react";
import styled from "styled-components";
import ServiceCard from "./small-components/ServiceCard";

const Services = () => {
  return (
    <Wrapper>
      <section className="section_services">
        <span className="section_service_heading">services we offer</span>
        <div className="all_services">
          <ServiceCard innerText={"online consultations"} />
          <ServiceCard innerText={"diagnosis"} />
          <ServiceCard innerText={"health products"} />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0rem;
  padding: 1rem 0rem;
  .section_service_heading {
    display: block;
    text-align: center;
    margin: auto;
    font-size: 3rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #ffc93c;
  }
  .section_services {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .all_services {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 450px) {
    margin: 1rem 0rem;
    .all_services {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;
export default Services;
