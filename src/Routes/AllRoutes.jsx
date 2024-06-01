import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import SignupPage from "../Pages/SignupPage";
import { CartProvider } from "../Components/ContextReducer";
import Cart from "../Pages/Cart";
import MyOrder from "../Pages/MyOrder";

const AllRoutes = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myOrders" element={<MyOrder />} />
      </Routes>
    </CartProvider>
  );
};

export default AllRoutes;
