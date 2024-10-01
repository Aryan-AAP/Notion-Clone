'use client';
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import createGlobe from "cobe";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { HoverEffect } from "../ui/card-hover-effect";
import { Featuree } from "./FeaturesSectionDemo";


export function FeaturesSectionDemo() {
  const router = useRouter();
  const features = [
    {
      title: "Beautiful interface",
      description:
        "Inspired from Aws and Notion",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "Real Time Collabrative Features",
      description:
        "Bring Notion workflow into the Coding ",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
   
    {
      title: "Other Features ",
      description:
        "",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-6 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Packed with Many Features 
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        From Code Management to Organized Documentation
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
            {feature.description && <FeatureDescription>{feature.description}</FeatureDescription>}
              {/* <FeatureDescription>{feature.description}</FeatureDescription> */}
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        " text-center font-normal text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/projectPhoto.png"  
            alt="header"
            width={800}
            height={800}
            className="h-full w-full object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

// export const SkeletonTwo = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const imageVariants = {
//     whileHover: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//     whileTap: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//   };
//   return (
//     <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
//       {/* TODO */}
//       <div className="flex flex-row -ml-20">
//         {images.map((image, idx) => (
//           <motion.div
//             variants={imageVariants}
//             key={"images-first" + idx}
//             style={{
//               rotate: Math.random() * 20 - 10,
//             }}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//           >
//             <Image
//               src={image}
//               alt="bali images"
//               width="500"
//               height="500"
//               className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex flex-row">
//         {images.map((image, idx) => (
//           <motion.div
//             key={"images-second" + idx}
//             style={{
//               rotate: Math.random() * 20 - 10,
//             }}
//             variants={imageVariants}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//           >
//             <Image
//               src={image}
//               alt="bali images"
//               width="500"
//               height="500"
//               className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//             />
//           </motion.div>
//         ))}
//       </div>

//       <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
//       <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
//     </div>
//   );
// };

export const SkeletonFour = () => {
  return (
    <div className="z-10" >
         <Featuree />

    </div>

   
  );
};
export function SkeletonTwo() {
  const router=useRouter()
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white m-auto dark:bg-zinc-900">
        <Image
          src={`/realtime.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Dev Notion 
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Our product is a comprehensive development platform that enhances real-time collaboration among team members. It integrates coding tools, note-taking, and project management into a single workspace.
        </p>
        <div className="text-center  flex justify-center items-center ">

    
        <Button  onClick={() => {router.push('/sign-up')}} className=" pt-8 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Get Started
  </span>
</Button>
</div>
      </BackgroundGradient>
    </div>
  );
}