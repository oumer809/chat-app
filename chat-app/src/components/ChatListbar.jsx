import React, { useState } from 'react'

const ChatListbar = () => {
 const [addBtn, setAddBtn] = useState(false)
  return (
    <div className='sm:w-7/12 w-0 '>
        <div className='flex items-center justify-between pr-2'>
            <div className='flex gap-3 items-center'>
                <img src="/avatar.png" alt="avatar" className='w-10 h-10 rounded-full object-contain' />
                <p className='font-semibold '>John Doe</p>
            </div>
            <div className='flex gap-3 items-center'>
                <img className='w-5 h-5 cursor-pointer ' src="/more.png" alt="more" />
                <img className='w-5 h-5 cursor-pointer ' src="/video.png" alt="video" />
                <img className='w-5 h-5 cursor-pointer ' src="/edit.png" alt="edit" />
            </div>
        </div>
        <div className='flex gap-3 my-3'>
            <div className='flex  items-center bg-black/50 rounded-md'>
                <img src="/search.png" alt="search" className='w-7 h-7 rounded-full p-1 ' />
                <input type="text" placeholder='Search'className='rounded-md bg-black/30 px-3 py-1 outline-none ' />
                
            </div>
            <img src={addBtn? "/minus.png" :"/plus.png" } className='w-7 h-7 rounded-full  p-1 bg-black/50 cursor-pointer text-white ' alt="" onClick={()=>setAddBtn(!addBtn)}/>
        </div>
            
        <div className='flex flex-col space-y-5 overflow-y-auto h-screen '>
            
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
            <div className='flex gap-3 border-b border-gray-400/50 py-3'>
                <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full object-center ' />
                <div className='flex flex-col '>
                    <p className='text-gray-300 font-semibold'>Jone Doe</p>
                    <p className='text-gray-300 text-sm '>Hello</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatListbar