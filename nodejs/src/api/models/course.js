const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a course name"],
    maxlength: [40, "Course Name should be under 40 characters"],
  },
  semester: {
    type: String,
    required: [true, "Please provide an semester count"],
  },
  period: {
    type: String,
    required: [true, "Please provide an period count"],
  },
  status: {
    type: Number,
    default: 1, // 0: Inactive, 1: Active
  },
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);