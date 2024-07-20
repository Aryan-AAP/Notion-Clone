import Image from "next/image";
import { Children } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex  h-screen w-full">
    <div className="absolute flex justify-center items-center size-full " >
<Image src="/AryanAAP.png" alt="BACKGROUND" fill className="" />
        {children} 
    </div>

    </main>

  );
}
