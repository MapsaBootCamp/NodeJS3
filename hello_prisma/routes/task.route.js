const express = require("express");
const {
  taskList,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");
const { userExist } = require("../middleware");
const router = express.Router();

router.get("/:user/taskList", userExist, taskList);
router.post("/:user/createTask", userExist, createTask);
router.put("/:user/:taskId", userExist, updateTask);
router.delete("/:user/:taskId", userExist, deleteTask);

module.exports = router;
