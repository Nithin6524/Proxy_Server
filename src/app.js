const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const app = express();

// ✅ Enable CORS
app.use(cors());

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api", routes);

module.exports = app;
