const db = require("../db");

class UserService {
  // TODO: Know that Dependency Inversion missed! (SOLID)
  db = db;
  constructor() {}

  #exclude(user, keys) {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !keys.includes(key))
    );
  }

  async getUserByUsername(username) {
    const user = await this.db.user.findUnique({
      where: { username },
    });
    return this.#exclude(user, "password");
  }
}

module.exports = UserService;
