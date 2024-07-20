"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"
import Breadcrumbs from "./breadcrumbs";
import Link from "next/link";

const Header = () => {

    const {user}=useUser();


  return (
    <div className="flex justify-between items-center p-5">
        {user && (
            <Link href={'/'}>
            <h1 className="text-2xl line-clamp-1 ">{user?.firstName} {`'s`} Space</h1>
            </Link>
        )}

        <Breadcrumbs /> 
        <SignedOut>
<SignInButton/>
        </SignedOut>

        <SignedIn>
            <UserButton/>
        </SignedIn>
        
    </div>
  )
}
export default Header