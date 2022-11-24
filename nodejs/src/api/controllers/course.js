const Course = require("../models/course");
const BigPromise = require("../middleware/BigPromise");

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

    res.status(200).send({ success: true, message: "Create course successfully.", course: course });
});