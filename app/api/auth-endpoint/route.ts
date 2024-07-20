import { adminDb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  auth().protect();
  const { sessionClaims } = await auth();
  const { room } = await req.json();
  const session = liveblocks.prepareSession(sessionClaims?.email!, {
    userInfo: {
      name: sessionClaims?.fullName! as string,
      email: sessionClaims?.email!,
      avatar: sessionClaims?.image!,
    },
  });
  const usersInRoom=await adminDb.collectionGroup('rooms').where('userId','==',sessionClaims?.email).get()

  const userInRoom=usersInRoom.docs.find(doc=>doc.data().roomId===room)
  if(userInRoom?.exists){
    session.allow(room,session.FULL_ACCESS);
    const {body,status}=await session.authorize()
    return new Response(body,{status})
  }
  else{
    return new Response('Unauthorized', { status: 401 });
  }
}
