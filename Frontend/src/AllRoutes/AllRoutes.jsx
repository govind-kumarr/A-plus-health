import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProductPage/AllProducts";
import Appointment from "../Pages/Appointment/Appointment";
<<<<<<< HEAD
import About from "../Components/About";
=======
import Cart from "../Pages/Cart/Cart";
>>>>>>> f92d241ba7d53a529f5cc24e858533ce11620fe8
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/appointment" element={<Appointment />} />
<<<<<<< HEAD
      <Route path="/about" element={<About />} />
      
=======
      <Route path="/cart" element={<Cart />} />
>>>>>>> f92d241ba7d53a529f5cc24e858533ce11620fe8
    </Routes>
  );
};

export default AllRoutes;
