import React from "react";
import styled from "styled-components";

const BookApointment = () => {
  return (
    <Wrapper>
      <section className="section_appointment">
        <span className="section_appointment_heading">Book Appointment</span>
        <div>
          <div className="section_appointment_box"></div>
          <div className="section_appointment_desc">
            <p className="desc_text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ab
              laboriosam autem, dolorem possimus explicabo aperiam iste modi
              earum
            </p>
            <button className="btn apt_btn">book appointment</button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .section_appointment {
    max-width: 120rem;
    margin: auto;
    /* border: 1px solid black; */
    height: 70vh;
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
  }
  .section_appointment > div {
    padding: 0rem 2rem;
    height: 85%;
    display: flex;
    justify-content: space-between;
  }
  .section_appointment_desc {
    width: 50%;
    border: 5px solid #0081c9;
    border-left: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 5rem;
  }
  .section_appointment_heading {
    display: block;
    text-align: center;
    margin: auto;
    font-size: 3rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #ffc93c;
  }
  .section_appointment_box {
    height: 100%;
    width: 50%;
    /* border: 1px solid red; */
    background: url("https://images.pexels.com/photos/7578816/pexels-photo-7578816.jpeg?&cs=tinysrgb&w=600");
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom-left-radius: 3rem;
    border-top-left-radius: 3rem;
    display: flex;
  }

  .desc_text {
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 500;
    text-align: justify;
  }
  .btn {
    border: 1px solid #0081c9;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8rem;
    color: #ffc93c;
    background: #0081c9;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    transition: all 0.3s ease-in-out;
    background: #86e5ff;
  }

  @media (max-width: 450px) {
    .section_appointment_box {
      width: 100%;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    .section_appointment_desc {
      width: 100%;
      border-top: none;
      border-left: 5px solid #0081c9;
      border-right: 5px solid #0081c9;
    }
    .section_appointment > div {
      flex-direction: column;
    }
  }
`;
export default BookApointment;
