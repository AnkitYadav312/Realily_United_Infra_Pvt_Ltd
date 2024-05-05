import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./components/Login";
import Signup from "./components/SignUp";



const App = () => {
  return (
    <div className="max-w-[1140px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
