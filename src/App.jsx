import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import AllRoutes from "./Routes/AllRoutes";
import { CartProvider } from "./Components/ContextReducer";

function App() {
  return (
         <AllRoutes/>
  );
}

export default App;
