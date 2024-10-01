// import LiveProvider from "@/components/liveProvider"
// import { Children } from "react"

import LiveProvider from "@/components/LiveProvider"

const PageLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <LiveProvider>
      {children}
        
    </LiveProvider>
  )
}
export default PageLayout