import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Story from "@/models/Story";

export async function GET() {
  await dbConnect();
  const stories = await Story.find().sort({ createdAt: -1 });
  return NextResponse.json(stories);
}

export async function POST(req) {
  await dbConnect();
  const { title, subtitle, content } = await req.json();
  const story = await Story.create({ title, subtitle, content });
  return NextResponse.json(story);
}

