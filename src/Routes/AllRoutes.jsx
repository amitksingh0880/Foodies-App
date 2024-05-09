import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignupPage";

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/register' element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
};

export default AllRoutes;
