import mongoose from "mongoose";
import { Schema } from "mongoose";
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
      offlinePrice: {
        type: Number,
        required: true
    },
    longDescription: {
      type: String,
      required: true
  },
  cardDescription: {
    type: String,
    required: true
},
    startDate: {
        type: Date,
        default: null,
    },
    rating: {
      type: Schema.Types.Decimal128,
      default: 0
  },
  totalReviews: {
    type: Number,
    default: 0
},
duration: {
  type: Number,
  default: 0
},
includes: {
  type: [String],
  default: []
},
requirements: {
  type: [String],
  default: []
},
imageData: {
  type: Buffer
}
    
})

const Course = mongoose.models.courses || mongoose.model("courses", courseSchema);

export default Course;