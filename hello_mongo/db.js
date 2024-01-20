const mongoose = require("mongoose");

const { connection } = mongoose;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("connected to db");
  } catch (error) {
    console.log("error in connection", error);
  }
}

connection.on("open", () => {
  console.log("connection ok shod");
});
