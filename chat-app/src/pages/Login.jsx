import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
    <div className='border border-gray-500 shadow  shadow-gray-300'>
        <form className='p-3 flex flex-col gap-4'>
            <h1 className='text-center p-3 font-bold'>Login here</h1>
             <div className='flex items-center gap-11'>
                <label htmlFor="password">Email:</label>
                <input type="email" placeholder='your email' className='px-4 py-2 outline-none border rounded-md bg-transparent border-gray-400' />
            </div>
             <div className='flex items-center gap-3'>
                <label htmlFor="email">Password:</label>
                <input type="password" placeholder='your password' className='px-4 py-2 outline-none border rounded-md bg-transparent border-gray-400' />
            </div>
          
             <button type='submit' className='px-4 py-2 bg-blue-600 hover:bg-blue-600/50 rounded-md'>Sign in</button>
             <p className='text-xs px-6'>Don't have an account <Link to={'/register'} className='text-sky-100 underline px-3 text-sm '>Register</Link></p>
        </form>
    </div>
        
    </div>
  )
}

export default Login