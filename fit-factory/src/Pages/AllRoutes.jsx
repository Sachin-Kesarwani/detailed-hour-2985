import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Admin from "../Admin/admin";
import Login from "../Components/Login";
import SearchPage from "./SearchPage";
import SinglePage from "./SinglePage";
import SignUp from "../Components/SignUp";
import Account from "../Account/Account";
import Proteins from "./Proteins/Proteins";
import Gainers from "./Gainers/Gainers";
import Fitness from "./Fitness/Fitness";
import Wellness from "./Wellness/Wellness";
import MultiVitamins from "./MultiVitamins/MultiVitamins";
import ProteinsFoods from "./ProteinsFood/ProteinsFoods";
import PrePostWorkout from "./PrePostWorkout/PrePostWorkout";
import WorkoutEssentials from "./WorkoutEssestials/WorkoutEssentials";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
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
        <Route path="/singlePage/:title/:id" element={<SinglePage />} />
        <Route path="/workoutessentials" element={<WorkoutEssentials />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
