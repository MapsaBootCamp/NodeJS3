const db = require("../db");

exports.userList = async (req, res) => {
  const users = await db.user.findMany({});
  res.json(
    users.map((user) => ({
      username: user.username,
      age: user.age,
      updatedAt: user.updatedAt,
    }))
  );
};
