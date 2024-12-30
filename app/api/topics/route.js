import connectToMongoDb from "@/libs/connect";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const topic = await req.json();
  await connectToMongoDb();
  await Topic.create(topic);
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectToMongoDb();
  const topics = await Topic.find();
  return NextResponse.json({ topics }, {status: 200});
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectToMongoDb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
