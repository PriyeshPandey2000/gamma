import Course from "@/app/models/courseModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { category, title, description, price, startDate } = reqBody;

    // Create a new course object
    const newCourse = new Course({
      category,
      title,
      description,
      price,
      startDate
    });

    // Save the course to the database
    const savedCourse = await newCourse.save();

    return NextResponse.json({ success: true, data: savedCourse }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
