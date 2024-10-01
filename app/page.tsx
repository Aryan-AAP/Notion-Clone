'use client';

import LandingPage from "@/components/LandingPage";
import NewDocumentButton from "@/components/NewDocumentButton";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { ArrowLeftCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? (
        <main className="flex space-x-2 items-center animate-pulse">
          <ArrowLeftCircle className="w-12 h-12" />
          <h1>Get Started with creating a New Document</h1>
          <NewDocumentButton />
        </main>
      ) : (
     

          <LandingPage />
     
      )}
    </>
  );
}
