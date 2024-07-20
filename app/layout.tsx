import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner"

// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Made with Next.js ",
  icons:'/AryanAAP.png',
  authors: [{ name: "Aryan Pardeshi" }],
  
  


};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>

    <html lang="en">
      <head>

      </head>
      <body >
        <Header/>

<div className="min-h-screen flex">
  <Sidebar />

<div  className="flex-1 p-4 bg-gray-100 scrollbar-hide overflow-y-auto">
        {children}

</div>
        </div>
        <Toaster position="top-center" />

        </body>
    </html>
    </ClerkProvider>
  );
}
