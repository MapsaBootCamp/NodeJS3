require("dotenv").config();
const express = require("express");
const { userController } = require("./controllers");

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // if content-type is application/json then parse data as json

app.get("/", (req, res) => {
  return res.send("Welcome");
});

app
  .route("/users")
  .get(userController.userList)
  .post(userController.createUser);

app
  .route("/users/:userId")
  .get(userController.userDetail)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
