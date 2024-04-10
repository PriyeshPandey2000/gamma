import Course from "@/app/models/courseModel";
import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function GET(request) {
  try {
    // Fetch all courses from the database
    const courses = await Course.find().lean();

    // Extract the courseId from the request query parameters
    const { courseId } = request.query;

    // If courseId is provided, filter the courses array to include only the course with the given ID
    if (courseId) {
      const filteredCourses = courses.filter(course => course.id === courseId);

      // If no course is found with the provided courseId, return a 404 error
      if (filteredCourses.length === 0) {
        return NextResponse.json({ success: false, error: "Course not found" }, { status: 404 });
      }

      // Return the filtered courses
      return NextResponse.json({ success: true, data: filteredCourses }, { status: 200 });
    }

    // If no courseId is provided, return all courses
    return NextResponse.json({ success: true, data: courses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
