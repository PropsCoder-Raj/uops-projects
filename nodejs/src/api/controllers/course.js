const Course = require("../models/course");
const User = require("../models/user");
const BigPromise = require("../middleware/BigPromise");

// Create a new Course
exports.createCourse = BigPromise(async (req, res, next) => {
  const { name, semester, period } = req.body;

  if (!name) {
    return next(new Error("Please enter course name"));
  }

  if (!semester) {
    return next(new Error("Please enter semester (how many semester)"));
  }

  if (!period) {
    return next(new Error("Please enter period (how many years)"));
  }

  const course = await Course.create({
    name,
    semester,
    period,
  });

  return res.status(200).send({ success: true, message: "Create course successfully.", course: course });
});

// Get all courses
exports.getCourse = BigPromise(async (req, res, next) => {
  const course = await Course.find();
  return res.status(200).send({ success: true, message: "Get all course successfully.", data: course, count: course.length });
});

// Get students by course 
exports.getStudentsCourse = BigPromise(async (req, res, next) => {
  const { _id } = req.params;

  if (!_id) {
    return next(new Error("Please enter course _id"));
  }

  const user = await User.find({ courseId: _id, role: 2 });
  return res.status(200).send({ success: true, message: "Get all students successfully with course "+_id+".", data: user, count: user.length });
});

// Get single course
exports.getSingleCourse = BigPromise(async (req, res, next) => {
  const { _id } = req.params;

  if (!_id) {
    return next(new Error("Please enter course _id"));
  }
  
  const course = await Course.find({_id: _id});
  return res.status(200).send({ success: true, message: "Get single course "+_id+"successfully.", data: course, count: course.length });
});