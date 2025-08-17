import React, { useRef, useState } from "react";
import Auth from "./components/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";

const App = () => {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");
  const roomRef = useRef(null)

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  return (
    
    <div>
      {room ? (
        <div><Chat room={room}/></div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-gray-600 text-white border-2 border-gray-400  shadomd shadow-cyan-500 p-6 w-64 gap-4  ">
            <label htmlFor="name">Room Name:</label>
            <input
              type="text"
              className="px-4 py-1 outline-none bg-transparent border-2 
               my-4 text-gray-300"
               ref={roomRef}
            />
            <button className="text-center px-4 py-2 bg-blue-500 rounded-md " onClick={()=> setRoom(roomRef.current.value)}>Create Room</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
