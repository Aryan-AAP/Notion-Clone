import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(
  
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

 //something like if user go to /doc push them to home
//  export const middleware = async (req: any, res: any, next: any) => {
//    const { pathname } = req;
//    if (pathname === "/doc") {
//      return res.redirect("/home");
//    }
//    return next;
//  }



    
