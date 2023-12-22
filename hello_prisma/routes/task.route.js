const express = require("express");
const {
  taskList,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");
const { authentication } = require("../middleware");
const router = express.Router();

router.get("/taskList", authentication, taskList);
router.post("/createTask", authentication, createTask);
router.put("/:taskId", authentication, updateTask);
router.delete("/:taskId", authentication, deleteTask);

module.exports = router;
