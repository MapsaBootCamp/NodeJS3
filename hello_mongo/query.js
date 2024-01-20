require("./db");
const { disconnect } = require("mongoose");
const User = require("./models/user");
const Todo = require("./models/todo");

const pageNumber = 3;
const pageSize = 10;
const skip = (pageNumber - 1) * pageSize;
// TODO: better way for pagination

/////// find, findOne
// User.find({}, { username: 1, _id: 0 })
//   .skip(2)
//   .limit(3)
//   .then((data) => console.log(data))
//   .finally(() => disconnect());

// User.find({ addresses: { $elemMatch: { city: "Tehran" } } }).then((data) =>
//   console.log(data)
// );

/// update ===> finde + save | findAndUpdate ==> (filter, newUpdate)

// User.findOne({ username: "Asghar" })
//   .then((user) => {
//     user.addresses.push({ city: "Tabriz", pelak: 12 });
//     return user.save();
//   })
//   .then(() => "save shod");

// User.findOneAndUpdate(
//   { username: "HassanSaw" },
//   { $push: { addresses: { city: "Ghom", pelak: 12 } } }
// ).then((data) => console.log(data));

// User.findOne({ username: "HassanSaw" })
//   .then((user) => {
//     const addrr = user.addresses.find((addrr) => addrr.city === "Ghom");
//     addrr.pelak = 14;
//     return user.save();
//   })
//   .then(() => console.log("save shod"));

// User.findOneAndUpdate(
//   {
//     username: "Asghar",
//     addresses: { $elemMatch: { city: "Mazandaran" } },
//   },
//   { $set: { "addresses.$.pelak": 100 } }
// ).then((data) => console.log(data));

////////////////////////////////////////////////////  populate
// User.findOne({ username: "Benyamin" })
//   .then((user) => Todo.create({ title: "Gojeh Bekhar", user: user._id }))
//   .then((todo) => console.log(todo))
//   .finally(() => disconnect());

User.findOne({ username: "Benyamin" })
  .then((user) => Todo.find({ user: user._id }, { title: 1, done: 1, _id: 0 }))
  .then((data) => console.log(data))
  .finally(() => disconnect());

// Todo.find()
//   .populate({
//     path: "user",
//     match: { username: { $eq: "Benyamin" } },
//     select: "username -_id",
//   })
//   .then((data) => console.log(data))
//   .finally(() => disconnect());
