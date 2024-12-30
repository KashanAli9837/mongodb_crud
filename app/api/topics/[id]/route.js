import connectToMongoDb from "@/libs/connect";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const id = (await params).id;
  const newTopic = await req.json();
  await connectToMongoDb();
  await Topic.findByIdAndUpdate(id, newTopic);
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const _id = (await params).id;
  await connectToMongoDb();
  const topic = await Topic.findOne({_id});
  return NextResponse.json(topic, { status: 200 });
}
