const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  pelak: Number,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  age: Number,
  pic: Buffer,
  comments: [String],
  addresses: [addressSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
