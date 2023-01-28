import React from "react";
import styled from "styled-components";
import DepartmentCard from "../small-components/DepartmentCard";

const Departments = ({ data, heading }) => {
  return (
    <Wrapper>
      <section className="section_department">
        <span className="section_department_heading">{heading}</span>
        <div className="departments_container">
          {data.map((department, ind) => (
            <DepartmentCard key={ind} text={department} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid red; */
  .departments_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .section_department_heading {
    display: block;
    text-align: center;
    margin: 1rem auto;
    font-size: 3rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #ffc93c;
    background-color: #0081c9;
  }
`;
export default Departments;
