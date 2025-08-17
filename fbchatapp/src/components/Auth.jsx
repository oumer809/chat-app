import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase.js'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate()
    const handleGoogle =async () => {
       const result =  await signInWithPopup(auth, provider);
       console.log(result)
        navigate('/dashboard')
    }
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='border-2 bg-gray-600 text-white p-6 rounded-md shadow-md shadow-gray-800'>
            <div className='flex flex-col gap-5'>
                <p>Login with Google</p>
                <button className='px-4 py-2 rounded-md border-cyan-500 border ' onClick={handleGoogle}>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Auth