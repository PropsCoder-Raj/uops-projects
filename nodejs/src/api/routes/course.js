const express = require("express");
const {
    createCourse
} = require("../controllers/course");
const router = express.Router();

router.route("/create").post(createCourse);

module.exports = router;