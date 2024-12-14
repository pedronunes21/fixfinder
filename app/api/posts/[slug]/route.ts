import clientPromise from "@/lib/mongodb";

import { NextRequest, NextResponse } from "next/server";

interface Params {
    slug: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {

    const client = await clientPromise;

    const db = client.db("FixFinder");

    const post = await db.collection("posts").findOne({ slug: params.slug })

    return NextResponse.json({
        post
    });
}