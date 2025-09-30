import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Story from "@/models/Story";

export async function POST(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const { action } = await req.json();

  let update = {};
  if (action === "like") {
    update = { $inc: { likes: 1 } };
  } else if (action === "unlike") {
    update = { $inc: { likes: -1 } };
  }

  const story = await Story.findByIdAndUpdate(id, update, { new: true });
  return NextResponse.json(story);
}

