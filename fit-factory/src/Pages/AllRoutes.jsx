import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Cart from "./Cart";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
