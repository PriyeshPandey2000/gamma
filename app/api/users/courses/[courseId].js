import Course from "@/app/models/courseModel";
import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";

connect();


export default async function handler(req, res) {
    try{
    const {
      query: { courseId },
    } = req;
  
    
  
    const course = await db.collection('courses').findOne({ _id: courseId });
  
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
  
    return res.status(200).json(course);
} catch (error) {
    // Handle any errors that occur during the database operation
    console.error('Error fetching course:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
