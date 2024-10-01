import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider";
// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Made with Next.js ",
  icons:'/logo.jpg',
  authors: [{ name: "Aryan Pardeshi" }],



};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // var docker2 = new Docker({host: 'http://192.168.1.10', port: 3000});


  return (
    <ClerkProvider>



    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2344515996464290"
     crossOrigin="anonymous"></script>
<Analytics/>
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2344515996464290"
     crossOrigin="anonymous"></script>
    </html>
    {/* </TerminalContextProvider> */}
    </ClerkProvider>
  );
}
