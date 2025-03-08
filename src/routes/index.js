const express = require("express");
const router = express.Router();

const weatherRoutes = require("./weather");
const newsRoutes = require("./news");
const quoteRoutes = require("./quote");
const bookRoutes = require("./books");

router.use("/quote", quoteRoutes);
router.use("/weather", weatherRoutes);
router.use("/news", newsRoutes);
router.use("/books", bookRoutes);

module.exports = router;
