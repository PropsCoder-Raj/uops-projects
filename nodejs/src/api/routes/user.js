const express = require("express");
const {
  createUser,
  signin,
  getStudents,
  getTeachers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { isLoggedIn } = require("../middleware/user");
const router = express.Router();

router.route("/create").post(createUser);
router.route("/signin").post(signin);
router.route("/students").get(getStudents);
router.route("/teachers").get(getTeachers);
router.route("/single/:_id").get(getSingleUser);
router.route("/single/:_id").put(updateUser);
router.route("/delete/:_id").delete(deleteUser);

module.exports = router;