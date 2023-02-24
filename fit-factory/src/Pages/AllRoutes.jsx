import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../Account/Account";
import Admin from "../Admin/admin";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Cart from "./Cart";
import Home from "./Home";
import SinglePage from "./SinglePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/singlePage/:title/:id" element={<SinglePage/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
