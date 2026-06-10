const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/tasks",taskRoutes);
app.use("/api/admin",adminRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

module.exports = app;