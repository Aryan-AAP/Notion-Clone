'use client'

import {
    LiveblocksProvider,
    RoomProvider,
  } from "@liveblocks/react/suspense";
const LiveProvider = ({children}: {children: React.ReactNode}) => {
    if(!process.env.NEXT_PUBLIC_LIVEBLOCKS_KEY) 
    {    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_KEY is not defined")}


  return (
    <LiveblocksProvider throttle={16}
    authEndpoint={'/api/auth-endpoint'}
    >
        {children}
    </LiveblocksProvider>
  )
}
export default LiveProvider