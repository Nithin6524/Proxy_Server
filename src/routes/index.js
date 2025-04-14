const express = require("express");
const router = express.Router();

const weatherRoutes = require("./weather");
const newsRoutes = require("./news");
const quoteRoutes = require("./quote");
const wordRoutes = require("./word");

router.use("/quote", quoteRoutes);
router.use("/weather", weatherRoutes);
router.use("/news", newsRoutes);
router.use("/word", wordRoutes);

module.exports = router;
