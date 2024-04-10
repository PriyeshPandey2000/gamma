// import jwt from "jsonwebtoken";
// import User from "@/app/models/userModel";
// import Course from "@/app/models/courseModel";
// import { connect } from "@/app/dbConfig/dbConfig";

// connect();

// export async function POST(request) {
//     try {
//         const { courseId, userId } = await request.json(); // Assuming courseId is sent in the request body

//         // Extract token from request headers
//         const token = request.cookies.token;
//         if (!token) {
//             throw new Error("Unauthorized");
//         }

//         // Verify token and get user ID
//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//         const decodedUserId = decodedToken.id;

//         // Fetch user and course documents from database
//         const user = await User.findById(userId);
//         const course = await Course.findById(courseId);

//         // Check if course and user exist
//         if (!user || !course) {
//             throw new Error('User or course not found');
//         }

//         // Check if the user already purchased the course
//         if (user.purchasedCourses.includes(courseId)) {
//             throw new Error('User already purchased this course');
//         }

//         // Update user's purchasedCourses array
//         user.purchasedCourses.push(courseId);
//         await user.save();

//         return { message: 'Course successfully purchased' };
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }


import User from "@/app/models/userModel";
import Course from "@/app/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { userId, courseId } = reqBody;

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const course = await Course.findById(courseId);

        if (!course) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        user.purchasedCourses.push(course);
        await user.save();

        return NextResponse.json({
            message: "Course added to user's purchased courses",
            success: true
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
