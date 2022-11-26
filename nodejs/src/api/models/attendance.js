const mongoose = require("mongoose");
const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  },
  status: {
    type: Number,
    default: 1, // 0: absent, 1: present
  },
}, { timestamps: true });

module.exports = mongoose.model("attendence", attendanceSchema);