import Image from "next/image";
import { Children } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex  h-screen w-full">
    <div className="flex justify-center items-center size-full " >
<Image src="/logo.jpg" alt="BACKGROUND" fill className="" />
        {children} 
    </div>

    </main>

  );
}
