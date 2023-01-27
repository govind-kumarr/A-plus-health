import React from "react";
import styled from "styled-components";
import TimeSlots from "../../Components/Appointment/TimeSlots";

const Appointment = () => {
  return (
    <Wrapper>
      <div className="appointment_process">
        <p className="step">step 1</p>
        <TimeSlots />
        <button className="btn next_btn">next step</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .appointment_process {
    max-width: 120rem;
    margin: auto;
    display: flex;
    flex-direction: column;

    .btn {
      text-align: right;
    }
  }
`;

export default Appointment;
