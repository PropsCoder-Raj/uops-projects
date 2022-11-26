const express = require("express");
const {
    dashboardCount
} = require("../controllers/admin");
const router = express.Router();

router.route("/dashboard-count").get(dashboardCount);

module.exports = router;