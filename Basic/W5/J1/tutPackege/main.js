/// commonJS ===> require, exports or module.exports
const express = require("express");
const moduleA = require("./a.js");
const { checkString } = require("./lib");
// const calculator = require("./calculator.js");
const { summ, calName } = require("./calculator.js");

// console.log(calculator.summ(2, 3));
// console.log(calculator.calName);
// console.log(calculator.naminMachineHesab);

console.log(summ(2, 3));
console.log(checkString.checkExistNumber("eohfiehfh2oeih"));
const app = express();

app.get("/", (req, res) => {
  res.send("Salam be Shoma");
});

app.listen(3001, () => {
  console.log("server is running");
});
