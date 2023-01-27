import React from "react";
import styled from "styled-components";

const TimeSlots = () => {
  return (
    <Wrapper>
      <div className="time_slots"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .time_slots {
    border: 1px solid #0081c9;
    max-width: 120rem;
    width: 90%;
    margin: auto;
    height: 50vh;
  }
`;
export default TimeSlots;
