const express = require("express");
const {
    createAttendance,
    getAttendanceByCourseId,
    getAttendanceByStudentId
} = require("../controllers/attendance");
const router = express.Router();

router.route("/create").post(createAttendance);
router.route("/course/:_id").get(getAttendanceByCourseId);
router.route("/student/:_id").get(getAttendanceByStudentId);

module.exports = router;