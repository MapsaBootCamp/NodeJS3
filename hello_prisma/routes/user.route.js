const express = require("express");
const { userList, register, login } = require("../controllers/user.controller");

const router = express.Router();

router.get("/userList", userList);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
