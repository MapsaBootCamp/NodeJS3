// let, const for declaration
let name = "John Doe";
console.log("Hello World!");

// javascript datatypes: String, Number, Boolean, Undefined, Null
let username = "camp";

let age = 250484456948;
let myNumber = 9007199254740991;
console.log(typeof age);

console.log(Number.MAX_SAFE_INTEGER);

let _bigint = BigInt(342352352532);
console.log(_bigint);

let isAlive = false;

let camp = null;
// console.log(typeof camp);

myObject = {
  name: "John Doe",
  age: 43,
  status: {
    isAlive: true,
    until: "2020-01-01",
  },
};

myArray = [12, "name", true];
console.log(typeof myArray);

/// operator

// console.log(1 + 2);
// console.log(3 * 2);
// console.log(3 / 2);
// console.log(13 % 10);
// console.log(Math.pow(2, 3));
// console.log(2 ** 3);

let num = 0;
// num++; /// num = num + 1;
// console.log(num);
// num--; /// num = num - 1;
// console.log(num);
// num += 2; /// num = num + 2;
// console.log(num);
// num -= 2; /// num = num - 2;

newNum = --num;
console.log(num);
console.log(newNum);

// console.log(num == 2);
// console.log(num != 2);
// console.log([] != 0);

age = 23;
console.log(age > 18 && age < 21); // Compute logical AND
console.log(age > 18 || age < 21); // Compute logical OR

console.log(0b1101 & 0b0101); // 0b0101
console.log(0b1101 | 0b0101); // 0b1101
console.log(0b1101 >> 1);
console.log((0b1101 << 1).toString(2));
// console.log(0xa101);

name = age < 12 ? null : "Divband"; // ternary operator
// console.log(name);

name && console.log(name);
// name ? console.log(name) : null;
