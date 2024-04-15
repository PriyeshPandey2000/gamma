import Course from "@/app/models/courseModel";
import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function GET(request) {
  try {
    const courses = await Course.find().lean(); // Fetch all courses from the database
  //   Course.find()
  // .then((allCourses) => {
  //   allCourses.forEach((course) => {
  //     // Add new fields to each course document
      
      
  //       course.imageData = null;
      
     

  //     // Save the updated course document
  //     course.save();
  //   });
  //   console.log('New fields added to all courses.');
  // })
  // .catch((error) => {
  //   console.error('Error updating course documents:', error);
  //   // Handle error
  // });
    return NextResponse.json({ success: true, data: courses }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
