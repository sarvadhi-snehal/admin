const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
