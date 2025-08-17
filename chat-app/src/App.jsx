import React from "react";
import ChatListbar from "./components/ChatListbar";
import MainChat from "./components/MainChat";
import ChatProfile from "./components/ChatProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <div className="bg-hero flex justify-center items-center h-screen  bg-center text-white ">
        <div className="flex rounded-md px-6 justify-between w-[90vw] h-[90vh] bg-gray-700/90 backdrop-blur-md mx-auto pt-3 overflow-hidden ">
        <Routes>
          {/* <Route path="/login" element={<Layout/>}/> */}
          {user ? (
            <Route path="/" element={
              <>
           <ChatListbar />
          <MainChat />
          <ChatProfile />
          </>
            }/>
          ): (
            <Route path="/login" element={<Login/>}/>
          )}
         
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
