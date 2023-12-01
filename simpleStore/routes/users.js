const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router.route("/").get(userController.userList).post(userController.createUser);

router
  .route("/:userId")
  .get(userController.userDetail)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
