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
import FrontedPrivate from "../Components/FrontedPrivate";
import Payment from "../Payment/PaymentPage";

const AllRoutes = () => {
  return (
    <div style={{ margin: "0px", padding: "0px", boxSizing: "border-box" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <FrontedPrivate>
              <Account />
            </FrontedPrivate>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/cart"
          element={
            <FrontedPrivate>
              <Cart />
            </FrontedPrivate>
          }
        />
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
        <Route
          path="/singlePage/:title/:id"
          element={
            <FrontedPrivate>
              <SinglePage />
            </FrontedPrivate>
          }
        />
        <Route path="/workoutessentials" element={<WorkoutEssentials />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
