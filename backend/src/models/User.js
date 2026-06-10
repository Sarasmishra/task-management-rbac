const mongoose = require('mongoose');

// Define a schema for a user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User"
  },

  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active"
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User