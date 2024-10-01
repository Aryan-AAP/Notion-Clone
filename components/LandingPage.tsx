
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { FeaturesSectionDemo } from "./LandingPageDesign/BentoGrid";
import HeroSection from "./LandingPageDesign/HeroSection";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FloatingDock } from "./ui/floating-dock";
import Image from "next/image";
 export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
const LandingPage = () => {

  return (
    <div className="bg-black" >

  
    <HeroSection />
    <FeaturesSectionDemo/>
  
    <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-white  text-sm md:font-normal font-light">
          Copyright © 2024 Dev Notion
        </p>

    </div>
    </div>

  );
}

export default LandingPage