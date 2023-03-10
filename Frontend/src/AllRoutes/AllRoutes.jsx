import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import AllProducts from "../Pages/AllProductPage/AllProducts";
import Appointment from "../Pages/Appointment/Appointment";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
