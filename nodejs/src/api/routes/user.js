const express = require("express");
const {
  createUser,
  signin,
  forgotPassword,
  passwordReset,
  changePassword,
} = require("../controllers/user");
const { isLoggedIn } = require("../middleware/user");
const router = express.Router();

router.route("/create").post(createUser);
router.route("/signin").post(signin);
// router.route("/forgotpassword").post(forgotPassword);
// router.route("/password/reset/:token").post(passwordReset);
// router.route("/change/password").post(isLoggedIn, changePassword);

module.exports = router;