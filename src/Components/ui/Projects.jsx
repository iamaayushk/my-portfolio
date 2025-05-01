import React from 'react'
// const HeroParallaxDemo = React.lazy(() => import('../ui/hero-parallax'));
// const AnimatedTestimonials = React.lazy(() => import('./animated-testimonials'));
import HeroParallaxDemo from '../ui/hero-parallax';
// import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

// const defaultTestimonials = [
//   {
//     src: "/testimonial1.jpg",
//     name: "John Doe",
//     designation: "Software Engineer",
//     quote: "This is an amazing project! Highly recommended."
//   },
//   {
//     src: "/testimonial2.jpg",
//     name: "Jane Smith",
//     designation: "Product Manager",
//     quote: "Great work and excellent attention to detail."
//   },
//   {
//     src: "/testimonial3.jpg",
//     name: "Alice Johnson",
//     designation: "UX Designer",
//     quote: "The user experience is fantastic and intuitive."
//   }
// ];

function Projects() {
  const navigate = useNavigate();
  const mainBtn=()=>{
    navigate('/');
  }
  return (

    <div className="w-full min-h-screen bg-black px-10 py-10">

      <div>
        <button className='text-white text-lg absolute top-5 left-2 border-2 border-amber-50 w-20 cursor-pointer font-bold rounded-2xl'onClick={mainBtn}>Home </button>
        <h1 className="text-4xl font-bold text-white text-center mb-10 ">My Project Section </h1>

       
      </div>
      {/* <Suspense fallback={<div className="text-white text-center">Loading Projects...</div>}> */}
        <HeroParallaxDemo />
        {/* <AnimatedTestimonials testimonials={defaultTestimonials} /> */}
      {/* </Suspense> */}
      
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Projects
