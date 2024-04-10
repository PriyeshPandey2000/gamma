import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import mongoose from "mongoose";


connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }
        console.log("user exists");

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }
        console.log(user);

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };
       
        // Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
       

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true
        });
//         User.find()
//    .then((allUsers) => {
//     allUsers.forEach((userSchema) => {
//            //create two new fields in each schema
//            userSchema.purchasedCourses= [];
           
//            //save the schema we updated
//            userSchema.save();
//            return response;
//        })
//    })
//    .catch((errors) => {
//     console.error('Error updating schemas:', errors);
       
//        return NextResponse.json({ nomoviesfound: "Could not update schemas" }, { status: 400 });
//    })
        
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
