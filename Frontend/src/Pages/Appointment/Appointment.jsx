import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Departments from "../../Components/Appointment/Departments";
import TimeSlots from "../../Components/Appointment/TimeSlots";
import data from "../../data/depts";
import timeslots from "../../data/timeslots.js";

const Appointment = () => {
  const [index, setIndex] = useState(0);
  const steps = {
    step1: false,
    step2: false,
    step3: false,
  };
  let formParts = [
    <Departments data={data} heading={"select your department"} />,
    <TimeSlots data={timeslots} heading={"slect time slot"} />,
  ];

  return (
    <Wrapper>
      <div className="appointment_process">
        {formParts[index]}
        <div className="btn_container">
          <button
            className="btn prev_btn"
            onClick={() => setIndex((prev) => prev - 1)}
            disabled={index === 0}
          >
            prev step
          </button>
          <button
            className="btn next_btn"
            onClick={() => setIndex((prev) => prev + 1)}
            disabled={index === 1}
          >
            next step
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .appointment_process {
    max-width: 120rem;
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 0rem;
    border: 2px solid #5bc0f8;
    gap: 1rem;
    .btn {
      text-align: right;
      border: 1px solid #0081c9;
      align-self: flex-end;
      padding: 1rem 2rem;
      color: #5bc0f8;
      font-size: 1.6rem;
      font-weight: bold;
      text-transform: capitalize;
      margin: 1rem;
    }
  }
  .btn_container {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
  }
  .move_left {
    transform: translateX(-100%);
  }
`;

export default Appointment;
