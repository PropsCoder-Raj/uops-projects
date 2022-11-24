const express = require("express");
const {
  home,
  signup,
  signin,
  forgotPassword,
  passwordReset,
  changePassword,
} = require("../controllers/user");
const { isLoggedIn } = require("../middleware/user");
const router = express.Router();

router.route("/").get(home);

router.route("/signup").post(signup);

router.route("/signin").post(signin);
router.route("/forgotpassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/change/password").post(isLoggedIn, changePassword);

module.exports = router;