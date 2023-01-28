import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DepartmentCard = ({ text }) => {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      <button
        style={click ? { background: "#0081C9", color: "white" } : {}}
        className="department_card"
        onClick={() => setClick((prev) => !prev)}
      >
        {text}
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .department_card {
    border: 1px solid #0081c9;
    width: 60%;
    border-radius: 1.5rem;
    font-size: 2rem;
    font-weight: 500;
    padding: 1.5rem 1rem;
  }
`;
export default DepartmentCard;
