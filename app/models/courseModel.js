import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        
    },
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
    startDate: {
        type: Date,
        default: false,
    },
    
})

const Course = mongoose.models.courses || mongoose.model("courses", courseSchema);

export default Course;