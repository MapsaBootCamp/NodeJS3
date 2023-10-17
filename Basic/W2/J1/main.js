const myArray = [3, 23, "Salam", true, null, "Sepehr", [3, 4, 5]];

// console.log(myArray[2]);
// myArray[2] = "Bye";
// console.log(myArray.push(3));
// console.log(myArray.pop());
// console.log(myArray.includes(230));
// console.log("length: ", myArray.length);
// console.log("yeduneh be akhar: ", myArray[myArray.length - 2]);
// console.log(myArray.shift());
// console.log(myArray);

// for (const item of myArray) {
//   console.log(item);
// }

// function mahan(val) {
//   console.log(val + 1);
// }

// myArray.forEach(mahan);

// myArray.forEach((val, index) => {
//   console.log("val: ", val);
//   console.log("index: ", index);
// });

//// slice, splice

// console.log(myArray);
// console.log(myArray.slice(2, 5));
// console.log(myArray.splice(2, 1));
// console.log(myArray);

///// map , filter, reduce

users = [
  { username: "Mina", age: 22 },
  { username: "Benyamin", age: 15 },
  { username: "Mahesh", age: 23 },
  { username: "Gholam", age: 52 },
];

usernames = users.map((user) => user.username);
// console.log(usernamesMojaz);
// console.log(users.filter((user) => user.age > 18));
// console.log(users.filter((user) => user.age > 18).map((user) => user.username));

checkedNumber = myArray.map((val) => {
  if (typeof val === "number") {
    return true;
  }
  return false;
});
sandevichMohtabiat = ["noon", "hamberger", "khiar_shoor", "gojeh"];

// sandevich = sandevichMohtabiat.reduce((prevVal, currVal) => {
//   console.log("prevVal: ", prevVal);
//   console.log("currVal: ", currVal);
//   return prevVal + "+" + currVal;
// }, "kaghaz");

// console.log(sandevich);

/// summation items in arrays of numbers
numbersArray = [1, 2, 3, 4, 5, 6];
summation = numbersArray.reduce((prevVal, currVal) => {
  return prevVal + currVal;
}, 0);
console.log(summation);

// checkedNumber = [];
// for (const item of myArray) {
//   if (typeof item === "number") {
//     checkedNumber.push(true);
//     continue;
//   }
//   checkedNumber.push(false);
// }

// console.log(checkedNumber);

/// functions

function functionName(argument) {
  /// body
}

/// arrow functions
const harEsmi = (arguments) => {};
