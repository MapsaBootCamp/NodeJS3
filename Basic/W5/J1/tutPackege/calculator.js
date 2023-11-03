const moduleA = require("./a.js");

exports.summ = (a, b) => a + b;
exports.multiply = (a, b) => a * b;
exports.minus = (a, b) => a - b;

exports.calName = "Ahmad";

console.log("Man ye modulam ba name Calculator!");

// module.exports = { ...exports, calName };

// module.exports = {
//   summ,
//   multiply,
//   // calName,
//   naminMachineHesab: calName,
// };
