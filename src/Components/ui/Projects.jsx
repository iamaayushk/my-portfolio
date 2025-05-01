import React, { Suspense } from 'react';
const HeroParallaxDemo = React.lazy(() => import('../ui/Products'));
import  AnimatedTestimonials  from './animated-testimonials';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { link } from 'motion/react-client';

function Projects() {
  const navigate = useNavigate();

  const mainBtn = () => {
    navigate('/');
  };

  const testimonials = [
    {
      src: "./fintrix.webp",
      className: "bg-cover",
      title: "Fintrix - AI-Powered Personal Finance Advisor",
      techStack: ["React.js", "Node.js", "MongoDB", "Exress.js", "Python","Tailwind CSS"],
    },
    {
      src: "./shapexploreDash.webp",
      title: "ShapeXplore - Gym Management Platform",
      techStack: ["HTML", "CSS", "Javascript"],
    },
    {
      src: "./moviemania2.webp",
      title: "MovieMania - Movie Discovery App",
      techStack: ["React.js", "Axios", "Tailwind CSS", ],
    },
    {
      src: "./constella.webp",
      title: "Constella - Interactive Constellation Platform",
      techStack: ["React.js","MongoDB", "Express.js", "Canvas API", "Node.js","Tailwind CSS"],
    },
    {
      src: "./DesignStoreDash.webp",
      title: "DesignStore - E-commerce Dashboard",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      src: "./uberclone.png",
      title: "UberClone - Ride-Hailing App",
      techStack: ["React.js", "Node.js","Express.js", "MongoDB",],
    },
  ];
  
  return (
    <div className="w-full min-h-screen bg-black px-10 py-10">
      <div>
        <button
          className="text-white text-lg absolute top-5 left-2 border-2 border-amber-50 w-20 cursor-pointer font-bold rounded-2xl"
          onClick={mainBtn}
        >
          Home
        </button>
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Project Section
        </h1>
      </div>

      <Suspense fallback={<div className="text-white text-center">Loading Projects...</div>}>
        <HeroParallaxDemo />
      </Suspense>
<div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
