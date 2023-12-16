const express = require("express");
const { taskList } = require("../controllers/task.controller");
const { userExist } = require("../middleware");
const router = express.Router();

router.get("/:user/taskList", userExist, taskList);

module.exports = router;
