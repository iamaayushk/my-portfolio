import React from 'react'
import Contact from '../Components/ui/Contact'
import Navbar from '../Components/ui/Navbar'
import { useNavigate } from 'react-router-dom'

function ContactPage() {
  const navigate= useNavigate();
  const redirect= ()=>{
    navigate('/')
  }
  return (
    <div className='w-full min-h-screen bg-black px-10 py-10'>
    
        <button className=' font-bold border-1  border-neutral-500 hover:bg-neutral-400 hover:text-black text-neutral-500 cursor-pointer text-2xl  rounded-sm w-20 flex flex-end items-end justify-center' onClick={redirect}>Home</button>
        <div className="relative z-20 bg-gradient-to-b text-center from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl"> Connect With Me </div>
        <Contact />

      </div>
  )
}

export default ContactPage