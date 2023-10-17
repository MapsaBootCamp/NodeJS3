/// Q1: [3, 4, 12, 3, "a", 21] ==> {3: 2, 4: 1, 12: 1, "a": 1}

const obj = {
  name: "John Doe",
  age: 43,
  married: true,
};
obj.name = "Gholam Asghari";
// obj.majority = "Engineer";
// obj["majority"] = "Engineer";
// console.log(obj);
// console.log(obj.hasOwnProperty("majority"));

myArray = [3, 4, 12, 3, "a", 21];
// function findDuplicate(array) {
//   const result = {};
//   for (const item of array) {
//     result.hasOwnProperty(item) ? result[item]++ : (result[item] = 1);
//     // if (result.hasOwnProperty(item)) {
//     //   result[item]++;
//     // } else {
//     //   result[item] = 1;
//     // }
//   }
//   return result;
// }
// console.log(findDuplicate(myArray));

reducedArr = myArray.reduce((prevVal, currVal) => {
  //   console.log(prevVal);
  prevVal.hasOwnProperty(currVal) ? prevVal[currVal]++ : (prevVal[currVal] = 1);
  return prevVal;
}, {});
// console.log(reducedArr);

const result = {};
myArray.forEach((item) => {
  result[item] = (result[item] || 0) + 1;
});
// console.log(result);

// Q2: given array ===> unique item of array

const q2Arr = [3, 4, 12, 3, 3, "a", 21, "a"];

// console.log(q2Arr.indexOf("a"));

// const uniqueQ2Arr = [];
// q2Arr.forEach((item) => {
//   uniqueQ2Arr.indexOf(item) === -1 ? uniqueQ2Arr.push(item) : null;
// });

// console.log(uniqueQ2Arr);

const uniqueQ2Arr = q2Arr.filter(
  (item, index, arr) => arr.indexOf(item) === index
);
console.log(uniqueQ2Arr);
