const db = require("../db");
const bc = require("bcrypt");
const { createToken } = require("../utils");

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const now = Date.now();
    const salt = await bc.genSalt(10);
    const hashedPasssword = await bc.hash(password, salt);
    const user = await db.user.create({
      data: { username, password: hashedPasssword },
    });

    return res.json({ msg: `user ${user.username} registerd` });
    // res.json({ salt, hashedPasssword, time: Date.now() - now });
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.user.findFirstOrThrow({ where: { username } });
    console.log("USER: ", user);
    if (!user) {
      throw new Error("username or password is incorrect");
    }
    const verified = await bc.compare(password, user.password);
    console.log("verified", verified);
    if (!verified) {
      throw new Error("username or password is incorrect");
    }
    const token = await createToken(
      { username },
      process.env.SECRET_KEY,
      process.env.REFRESH_TOKEN_TIME,
      process.env.ACCESS_TOKEN_TIME,
      username
    );
    return res.json({
      token,
    });
  } catch (e) {
    next(e);
  }
};

exports.userList = async (req, res) => {
  // TODO: service!
  const users = await db.user.findMany({});
  res.json(
    users.map((user) => ({
      username: user.username,
      age: user.age,
      updatedAt: user.updatedAt,
    }))
  );
};
