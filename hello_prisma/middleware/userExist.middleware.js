const db = require("../db");

const userExist = async (req, res, next) => {
  const { user } = req.params;
  const userObj = await db.user.findFirst({ where: { username: user } });
  if (userObj) {
    req.user = userObj;
    next();
  } else {
    return res.status(404).json({
      message: "user not found!",
    });
  }
};

module.exports = userExist;
