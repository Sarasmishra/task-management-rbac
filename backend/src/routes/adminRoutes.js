const express = require("express");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const {
  getAllUsers,
  deleteUser,
  updateUserStatus,
  getAllTasks,
  deleteAnyTask,
  getActivityLogs,
  getAnalytics,
} = require("../controllers/adminController");

const router = express.Router();

router.use(protect);
router.use(adminOnly);

router.get("/users", getAllUsers);

router.delete("/users/:id", deleteUser);

router.patch(
  "/users/:id/status",
  updateUserStatus
);

router.get("/tasks", getAllTasks);

router.delete(
  "/tasks/:id",
  deleteAnyTask
);

router.get(
  "/activity-logs",
  getActivityLogs
);

router.get(
  "/analytics",
  getAnalytics
);

module.exports = router;