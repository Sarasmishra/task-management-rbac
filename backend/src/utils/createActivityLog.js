const ActivityLog = require("../models/ActivityLog");

const createActivityLog = async ({
  userId,
  action,
  taskId = null,
}) => {
  try {
    await ActivityLog.create({
      userId,
      action,
      taskId,
    });
  } catch (error) {
    console.error("Activity Log Error:", error.message);
  }
};

module.exports = createActivityLog;