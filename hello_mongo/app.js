require("./db");
const express = require("express");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
});

app.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  return res.send("user ok shod");
});

app.post("/:userId/comments", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  user.comments.push(req.body.comment);
  await user.save();
  res.send("comment add shod");
});

app.listen(3001, () => {
  console.log("server OK");
});
