const express = require("express");
const router = express.Router();
const { getWord } = require("../controllers/word");

router.get("/", getWord);

module.exports = router;