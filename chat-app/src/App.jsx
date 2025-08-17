import React from "react";
import ChatListbar from "./components/ChatListbar";
import MainChat from "./components/MainChat";
import ChatProfile from "./components/ChatProfile";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  const user = false;
  return (
    <Routes>
      <div className="bg-hero flex justify-center items-center h-screen  bg-center text-white ">
        <div className="flex rounded-md px-6 justify-between w-[90vw] h-[90vh] bg-gray-700/90 backdrop-blur-md mx-auto pt-3 overflow-hidden ">
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
    
        </div>
      </div>
    </Routes>
  );
};

export default App;
