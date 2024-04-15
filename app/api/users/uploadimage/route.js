import Course from "@/app/models/courseModel";
import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import fs from 'fs';

connect();

export  async function POST(req, res) {
    try {
        // Read image files as binary data
        const imageData1 = fs.readFileSync('public/images/9.png');
        // const imageData2 = fs.readFileSync('public/images/8.png');
        
        // Update imageData for the specified course IDs
        await Course.findByIdAndUpdate("6611c032467c3ba9ab016963", { imageData: imageData1 });
        // await Course.findByIdAndUpdate("6611c028467c3ba9ab016961", { imageData: imageData2 });
  
        return NextResponse.json({ success: true, message: 'Images updated successfully.' });
    } catch (error) {
        console.error('Error updating images:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
