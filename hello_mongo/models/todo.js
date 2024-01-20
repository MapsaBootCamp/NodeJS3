const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  done: { type: Boolean, default: false },
  user: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
