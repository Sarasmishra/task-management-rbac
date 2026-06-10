const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

module.exports = app;