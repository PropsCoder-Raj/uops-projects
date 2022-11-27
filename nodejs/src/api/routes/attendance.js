const express = require("express");
const {
    createAttendance,
    getAttendanceByCourseId,
    getAttendanceByStudentId,
    getAttendanceByCourseIdAndTeacherId
} = require("../controllers/attendance");
const router = express.Router();

router.route("/create").post(createAttendance);
router.route("/course/:_id").get(getAttendanceByCourseId);
router.route("/course/:_id/:teacherId/:date").get(getAttendanceByCourseIdAndTeacherId);
router.route("/student/:_id").get(getAttendanceByStudentId);

module.exports = router;