import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignupPage";
import { CartProvider } from "../Components/ContextReducer";

const AllRoutes = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </CartProvider>
  );
};

export default AllRoutes;
