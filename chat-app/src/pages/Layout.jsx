import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login'

const Layout = () => {
  return (
    <div className='flex '>
        <div className=' flex h-screen items-center justify-center mx-auto '>
            <img src="/banner.jpg" alt="" className='w-screen sm:w-[60vw] absolute h-screen object-cover '/>
            <div className='flex flex-col mx-auto gap-3 px-14 items-center text-white relative  z-50 '>
                <div className=' flex flex-col mx-auto items-center justify-center'>
                    <h1 className='text-3xl  font-extrabold text-center'>Welcome back </h1>
                <p className='text-md tex'>Join us by sign here</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout