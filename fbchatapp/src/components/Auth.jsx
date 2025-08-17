import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase.js'

import Cookies from 'universal-cookie'

const Auth = (props) => {
 const {setIsAuth}=props
    const cookies = new Cookies();
    const handleGoogle =async () => {
      try {
         const result =  await signInWithPopup(auth, provider);
       cookies.set("auth-token", result.user.refreshToken)
       setIsAuth(true)
      } catch (error) {
        console.log(error.message)
      }
        
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