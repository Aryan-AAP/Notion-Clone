"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Spotlight } from "../ui/Spotlight";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const words = [
  { text: "The", className: "text-indigo-500" },
  { text: "Ultimate", className: "text-indigo-500" },
  { text: "Developer's", className: "text-indigo-500" },
  { text: "NoteBook", className: "text-indigo-500" },
];

const HeroSection = () => {
  const router = useRouter();
  return (
    <>
      <BackgroundBeamsWithCollision>
        <motion.div
       
        >
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Dev Notion
      </h1>
      <Spotlight fill="white" className="absolute top-0 left-0 h-full w-full z-10" />
      
          <TypewriterEffectSmooth words={words} />
     <div className="text-center  flex justify-center items-center ">

    
        <Button  onClick={() => {router.push('/sign-up')}} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Get Started
  </span>
</Button>
     </div>
        </motion.div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default HeroSection;
