const Course = require("../models/course");
const User = require("../models/user");
const Attendance = require("../models/attendance");
const BigPromise = require("../middleware/BigPromise");
const mongoose = require("mongoose")

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

  const attendance = await Attendance.create(req.body);

  return res.status(200).send({ success: true, message: "Create attendance successfully.", attendance: attendance, count: attendance.length });
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
  return res.status(200).send({ success: true, message: "Get attendance by course id " + _id + ".", attendance: attendance, count: attendance.length });
});


// Get all attendance by course
exports.getAttendanceByCourseIdAndTeacherId = BigPromise(async (req, res, next) => {
  const { _id, teacherId, date } = req.params;

  if (!_id || !teacherId || !date) {
    return next(new Error("Please enter course id OR teacher id OR date."));
  }

  var start = new Date(date);
  start.setHours(0, 0, 0, 0);

  var end = new Date(date);
  end.setHours(23, 59, 59, 999);

  console.log("start: ", start);
  console.log("end: ", end);

  // const attendance = await Attendance.find({ course: _id, teacher: teacherId, createdAt: { $gte: start, $lt: end } });
  const attendance = await Attendance.aggregate([
    {
      $match: { course: mongoose.Types.ObjectId(_id), teacher: mongoose.Types.ObjectId(teacherId), createdAt: { $gte: start, $lt: end } }
    },
    {
      $lookup: {
        from: "users",
        localField: "student",
        foreignField: "_id",
        as: "studentdata",
      },
    }
  ]);
  return res.status(200).send({ success: true, message: "Get attendance by course id " + _id + " and by teacher id " + teacherId + ".", attendance: attendance, count: attendance.length });
});



// Get all attendance by student
exports.getAttendanceByStudentId = BigPromise(async (req, res, next) => {
  const { _id } = req.params;


  if (!_id) {
    return next(new Error("Please enter course id."));
  }

  const attendance = await Attendance.find({ student: _id }).sort({ createdAt: -1 });
  return res.status(200).send({ success: true, message: "Get attendance by student id " + _id + ".", attendance: attendance, count: attendance.length });
});