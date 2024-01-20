require("./db");
const User = require("./models/user");
const mongoose = require("mongoose");

const user = new User({
  username: "Asghar",
  password: "1234",
  age: 23,
  comments: ["salam", "bye"],
  addresses: [
    { city: "Tehran", pelak: 20 },
    { city: "Shiraz", pelak: 18 },
  ],
});

user
  .save()
  .then(() => {
    console.log("save shod");
    mongoose.disconnect();
  })
  .catch((e) => console.log(e));

// User.create({})
