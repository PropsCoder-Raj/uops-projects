const express = require("express");
const {
    createCourse,
    getCourse,
    getSingleCourse,
    getStudentsCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/course");
const router = express.Router();

router.route("/create").post(createCourse);
router.route("/update/:_id").put(updateCourse);
router.route("/delete/:_id").delete(deleteCourse);
router.route("/get").get(getCourse);
router.route("/get/:_id").get(getSingleCourse);
router.route("/students/:_id").get(getStudentsCourse);

module.exports = router;