const Course = require("../models/course");
const User = require("../models/user");
const Attendance = require("../models/attendance");
const BigPromise = require("../middleware/BigPromise");

// Create a new attendance
exports.createAttendance = BigPromise(async (req, res, next) => {
  const { student, teacher, course, status } = req.body;

  if (!student) {
    return next(new Error("Please select course student"));
  }

  if (!teacher) {
    return next(new Error("Please select teacher"));
  }

  if (!course) {
    return next(new Error("Please select course"));
  }

  if (!status) {
    return next(new Error("Please select presenty status"));
  }

  const attendance = await Attendance.create(req.body);

  return res.status(200).send({ success: true, message: "Create attendance successfully.", attendance: attendance });
});

// Get all attendance by course
exports.getAttendanceByCourseId = BigPromise(async (req, res, next) => {
  const { _id } = req.params;


  if (!_id) {
    return next(new Error("Please enter course id."));
  }

  var start = new Date();
  start.setHours(0, 0, 0, 0);

  var end = new Date();
  end.setHours(23, 59, 59, 999);

  const attendance = await Attendance.find({ course: _id, createdAt: { $gte: start, $lt: end } });
  return res.status(200).send({ success: true, message: "Get attendance by course id " + _id + ".", attendance: attendance });
});



// Get all attendance by student
exports.getAttendanceByStudentId = BigPromise(async (req, res, next) => {
  const { _id } = req.params;


  if (!_id) {
    return next(new Error("Please enter course id."));
  }

  const attendance = await Attendance.find({ student: _id }).sort({ createdAt: -1 });
  return res.status(200).send({ success: true, message: "Get attendance by student id " + _id + ".", attendance: attendance });
});