const jwt = require("jsonwebtoken");
const db = require("../db");

module.exports = async function createToken(
  payload,
  secretKey,
  refreshExpire,
  accessExpire,
  username = null
) {
  try {
    const accessToken = jwt.sign(payload, secretKey, {
      expiresIn: accessExpire,
    });
    console.log("access Token: ", accessToken);
    const refreshToken = jwt.sign(payload, secretKey, {
      expiresIn: refreshExpire,
    });
    console.log("refre Token: ", refreshToken);

    if (username) {
      await db.token.create({
        data: {
          userId: username,
          token: refreshToken,
        },
      });
    }
    return {
      refreshToken,
      accessToken,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
