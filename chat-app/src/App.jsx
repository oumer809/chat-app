import React from 'react'
import ChatListbar from './components/ChatListbar'
import MainChat from './components/MainChat'
import ChatProfile from './components/ChatProfile'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-hero flex justify-center items-center h-screen  bg-center text-white '>
      <div className='flex rounded-md px-6 justify-between w-[90vw] h-[90vh] bg-gray-700/90 backdrop-blur-md mx-auto pt-3 overflow-hidden '>
        <ChatListbar/>
      <MainChat/>
      <ChatProfile/>
      </div>
      
    </div>
  </BrowserRouter>
  )
}

export default App