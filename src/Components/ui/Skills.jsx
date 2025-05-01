import React, { Suspense, lazy } from 'react'
import {useNavigate} from 'react-router-dom'
const GlowingCard = lazy(() => import('./GlowingCard'))
import Footer from './Footer'
import { nav } from 'motion/react-client'

function Skills() {
  const navigate = useNavigate();
  const mainPage = () => {
    navigate('/');
  }

  return (

    <div className="w-full min-h-screen bg-black px-10 py-10">
      <button className='border-2 border-amber-50 text-neutral-300 w-[60px] h-[30px] rounded-xl text-center cursor-pointer' onClick={mainPage}> Back
      </button>
      <div className=" mb-10 relative z-20 bg-gradient-to-b text-center from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        My Tech Arsenal
      </div>
      <Suspense fallback={<div className="text-white text-center">Loading Skills...</div>}>
        <GlowingCard />
      </Suspense>
      <div className='mt-15'>
        <Footer />
      </div>
    </div>

  )
}

export default Skills
