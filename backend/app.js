const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks",taskRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

module.exports = app;