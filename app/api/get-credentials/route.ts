import { auth } from "@clerk/nextjs/server";
import { adminDb } from '@/firebase-admin';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { room } = await req.json();
        if (!room) {
            return NextResponse.json({ error: "Room ID is required" }, { status: 400 });
        }

        const docRef = adminDb.collection('documents').doc(room);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            return NextResponse.json({ error: "Room not found" }, { status: 404 });
        }

        const data = docSnap.data();
        if (!data || !data.username || !data.password) {
            return NextResponse.json({ error: "Credentials not found for this room" }, { status: 404 });
        }

        return NextResponse.json({ username: data.username, password: data.password }, { status: 200 });
    } catch (error) {
        console.error("Error fetching credentials:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}