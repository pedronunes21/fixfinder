import clientPromise from "@/lib/mongodb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const client = await clientPromise;

    const db = client.db("FixFinder");

    const posts = await db.collection("posts").find({}).toArray();

    return NextResponse.json({
        posts
    })
}