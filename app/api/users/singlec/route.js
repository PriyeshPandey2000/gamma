import Course from "@/app/models/courseModel";
import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function GET(request) {
    console.log(request);
  try {
    // const {
    //   query: { courseId },
    // } = request;
   const  courseId="courseId=6611bed1467c3ba9ab016953";

    const course = await Course.findOne({ _id: courseId }).lean();

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ data: course }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}