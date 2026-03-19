const express = require("express");

const siteRoutes = require("./siteRoutes");

const router = express.Router();

router.use("/api", siteRoutes);

module.exports = router;
