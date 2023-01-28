import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProductPage/AllProducts";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
};

export default AllRoutes;
