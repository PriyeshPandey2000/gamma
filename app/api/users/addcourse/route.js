import User from "@/app/models/userModel";
import Course from "@/app/models/courseModel";
import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { userId, courseId, paymentStatus } = reqBody;
        if (paymentStatus !== "PAYMENT_SUCCESS") {
            return NextResponse.json({ error: "Payment failed" }, { status: 400 });
        }

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
