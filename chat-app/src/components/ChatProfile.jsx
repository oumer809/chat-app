import React, { useState } from "react";

const ChatProfile = () => {
  const [open, setOpen]= useState(false)
  return (
    <div className="w-7/12 border-l border-gray-400/60 ">
      <div className="flex flex-col justify-center items-center gap-2 py-2 border-b border-gray-400/50">
        <img
          src="/profile.jpg"
          alt=""
          className="w-16 h-16 rounded-full  mx-auto object-cover cursor-pointer"
        />
        <h1 className="font-bold ">Mario Kim</h1>
        <p className="text-sm text-gray-300 pb-3">Full Stack MERN Developer.</p>
      </div>
      <div>
        <div className="flex items-center justify-between p-2 ">
          <p className="text-gray-200">Chat Settings</p>
          <img
            src="/arrowUp.png"
            alt=""
            className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between p-2 ">
          <p className="text-gray-200">Chat Settings</p>
          <img
            src="/arrowUp.png"
            alt=""
            className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between p-2 ">
          <p className="text-gray-200">Privacy & help</p>
          <img
            src="/arrowUp.png"
            alt=""
            className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between p-2 ">
          <p className="text-gray-200">Shared photos</p>
          <img
            src={open ? "/arrowUp.png" :"/arrowDown.png"}
            alt=""
            className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
            onClick={()=>setOpen(!open)}
          />
          
        </div>
        <div className={open ?"flex flex-col gap-2 px-3": "hidden"}>
            <div className="flex items-center justify-between p-2 ">
              <div className="flex gap-3 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-10 h-10 rounded-md   cursor-pointer"
                />
                <p className="text-gray-300 text-sm">Figma design 2024.png</p>
              </div>
              <img
                src="/download.png"
                alt=""
                className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between p-2 ">
              <div className="flex gap-3 items-center">
                <img
                  src="/nature.jpg"
                  alt=""
                  className="w-10 h-10 rounded-md  object-cover cursor-pointer"
                />
                <p className="text-gray-300 text-sm">Figma design 2024.png</p>
              </div>
              <img
                src="/download.png"
                alt=""
                className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between p-2 ">
              <div className="flex gap-3 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-10 h-10 rounded-md   cursor-pointer"
                />
                <p className="text-gray-300 text-sm">Figma design 2024.png</p>
              </div>
              <img
                src="/download.png"
                alt=""
                className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between p-2 ">
              <div className="flex gap-3 items-center">
                <img
                  src="/profile.jpg"
                  alt=""
                  className="w-10 h-10 rounded-md   cursor-pointer"
                />
                <p className="text-gray-300 text-sm">Figma design 2024.png</p>
              </div>
              <img
                src="/download.png"
                alt=""
                className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
              />
            </div>
        </div>
         <div className="flex items-center justify-between p-2 ">
          <p className="text-gray-200">Shared files</p>
          <img
            src="/arrowDown.png"
            alt=""
            className="w-7 h-7 rounded-full bg-black/50 p-2 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <button className="px-4 py-2 rounded-md bg-red-600 textgra3 hover:bg-red-700">Block User</button>
        
        <button className="px-4 py-2 rounded-md bg-gradient-to-r from-yellow-500 via-cyan-500 to-orange-500 hover:bg-gradient-to-r hover:from-yellow-600 hover:via-cyan-600 hover:to-orange-600 transition-colors ">Logout</button>
      </div>
    </div>
  );
};

export default ChatProfile;
