const Course = require("../models/course");
const User = require("../models/user");

exports.dashboardCount = async(req, res) => {
    const courseCount = await Course.find().count();
    const studentCount = await User.find({role: 2}).count();
    const teacherCount = await User.find({role: 1}).count();
    
    return res.status(200).send({ success: true, message: "Get Dashboard Count.", courseCount: courseCount, studentCount: studentCount, teacherCount: teacherCount});
}