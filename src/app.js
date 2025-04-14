const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const app = express();

// ✅ Enable CORS
app.use(cors({ origin: "*" }));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api", routes);

module.exports = app;
