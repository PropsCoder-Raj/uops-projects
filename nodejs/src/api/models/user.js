const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    validate: [validator.isEmail, "Please enter email in correct format"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide an password"],
    select: false,
  },
  phoneNumber: {
    type: String,
  },
  courseId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  }],
  role: {
    type: Number,
    default: 0, // 0: Admin, 1: Teacher, 2: Student
  },
  status: {
    type: Number,
    default: 1, // 0: Inactive, 1: Active
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidatedPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

userSchema.methods.getForgotPasswordToken = function () {
  const forgotToken = crypto.randomBytes(20).toString("hex");

  this.forgotPasswordToken = crypto
    .createHash("sha256")
    .update(forgotToken)
    .digest("hex");

  this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;

  return forgotToken;
};


mongoose.model("User", userSchema).find({ role: 0 }, async (err, result) => {
  if (err) {
    console.log("❤️ When Default admin creation error :", err);
  }
  else if (result.length != 0) {
    console.log("💚 Default Admin.");
  }
  else {
    let obj = {
      name: "admin",
      role: 0,
      email: "admin@gmail.com",
      password: "Admin@123",
      status: 1
    };
    mongoose.model("User", userSchema).create(obj, async (err1, result1) => {
      if (err1) {
        console.log("❤️ When Default admin creation error : ", err1);
      } else {
        console.log("💚 Default admin Created", result1);
      }
    });
  }
});


module.exports = mongoose.model("User", userSchema);