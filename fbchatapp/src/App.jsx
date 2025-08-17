import React from 'react'
import Auth from './components/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/' element={<Auth/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App