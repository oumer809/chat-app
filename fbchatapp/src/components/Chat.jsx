import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'

const Chat = ({room}) => {
    const [message, setMessage] =useState('')

    const messageRef = collection(db, 'messages');

    useEffect(()=>{
       const queryMessages = query(messageRef, where('room','==', room));
       onSnapshot(queryMessages, (snapshot)=>{
         console.log('')
       });
    },[])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(message === '') return;

        await addDoc(messageRef, {
            text: message,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });
        setMessage('');
    }
  return (
    <div className='flex items-center justify-center h-screen '>
        <form onSubmit={handleSubmit} className='border-2 border-gray-600 bg-gray-300 p-6 '>
            <input type="text" placeholder='type your message' className='px-4 py-1 'value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button type='submit' className='px-4 py-2 bg-blue-500 rounded-md'>Send</button>
        </form>
    </div>
  )
}

export default Chat