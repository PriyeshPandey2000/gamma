

import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import { connect } from "@/app/dbConfig/dbConfig";
import { sendEmail } from "@/app/helpers/mailer";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { username, email, password ,phone} = reqBody;

        console.log(reqBody);
        if (!username || !email || !password || !phone) {
            return NextResponse.json({ error: "Please provide all required fields" }, { status: 400 });
        }

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        // Send verification email
        // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error"  }, { status: 500 });
    }
}
