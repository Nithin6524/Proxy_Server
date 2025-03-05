const express = require("express");
const router = express.Router();

const weatherRoutes = require("./weather");
const newsRoutes = require("./news");

router.use("/weather", weatherRoutes); 
router.use("/news", newsRoutes);
module.exports = router;
