module.exports = class MyError extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }
};
