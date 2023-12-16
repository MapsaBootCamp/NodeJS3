const express = require("express");
const { userList } = require("../controllers/user.controller");

const router = express.Router();

router.get("/userList", userList);

module.exports = router;
