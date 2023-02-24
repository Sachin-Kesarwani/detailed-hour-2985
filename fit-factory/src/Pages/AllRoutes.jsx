import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/admin";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Cart from "./Cart";
import Home from "./Home";
import SearchPage from "./SearchPage";
import ProductDetails from "./ProductDetails";
import Proteins from "./Proteins/Proteins";
import Gainers from "./Gainers/Gainers";
import Fitness from "./Fitness/Fitness";
import Wellness from "./Wellness/Wellness";
import ProteinsFoods from "./ProteinsFood/ProteinsFoods";
import PrePostWorkout from "./PrePostWorkout/PrePostWorkout";
import WorkoutEssentials from "./WorkoutEssestials/WorkoutEssentials";
import MultiVitamins from "./MultiVitamins/MultiVitamins";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/proteins" element={<Proteins />} />
        <Route path="/gainers" element={<Gainers />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/proteinsfoods" element={<ProteinsFoods />} />
        <Route path="/prepostworkout" element={<PrePostWorkout />} />
        <Route path="/multivitamins" element={<MultiVitamins />} />
        <Route path="/searchpage/:query" element={<SearchPage />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/workoutessentials" element={<WorkoutEssentials />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
