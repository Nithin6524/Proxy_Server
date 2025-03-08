const express = require("express");
const router = express.Router();
const { getquote } = require("../controllers/quote");

router.get("/", getquote);

module.exports = router;