import React, { Suspense } from 'react';
import { Spotlight } from '../Components/ui/spotlight-new';
import Navbar from '../Components/ui/Navbar';
import { GridBackgroundDemo } from '../Components/ui/GridBackgroundDemo';
import Contact from '../Components/ui/Contact';
import { FloatingDock } from '../Components/ui/Floating-dock';
import Footer from '../Components/ui/Footer';
import { IconHome, IconMessage, IconUser, IconBriefcase } from "@tabler/icons-react";

// ✅ Lazy imports
const HeroParallaxDemo = React.lazy(() => import('../Components/ui/Products'));
const GlowingCard = React.lazy(() => import('../Components/ui/GlowingCard'));

function Home() {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-5 w-5" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconUser className="h-5 w-5" />,
      href: "/about",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-5 w-5" />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <IconMessage className="h-5 w-5" />,
      href: "/contact",
    },
  ];

  return (
    <>
      <div className="relative w-full h-screen bg-black border-b-2 border-dotted border-zinc-800">
      <Spotlight />
      <Suspense fallback={<div className="text-black text-center">Loading Projects...</div>}>
      <Navbar />
        </Suspense>
        
      </div>

      <div className='relative w-full min-h-screen'>
        <GridBackgroundDemo />
      </div>

      <div className="w-full min-h-screen bg-black px-10 py-10">
        <div className="relative z-20 bg-gradient-to-b text-center from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Skills
        </div>
        <Suspense fallback={<div className="text-white text-center">Loading Skills...</div>}>
          <GlowingCard />
        </Suspense>
      </div>

      <div className="w-full min-h-screen bg-black px-10 py-10">
        <Suspense fallback={<div className="text-white text-center">Loading Projects...</div>}>
          <HeroParallaxDemo />
        </Suspense>
      </div>

      <div className="rounded-md flex">
       
      </div>
      <Footer />
    </>
  );
}

export default Home;
