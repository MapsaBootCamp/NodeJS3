//// Array

const myArray = [2, 3, 3, 4, "qff"];
const arr2 = [1, 200];

const arr3 = [...myArray, ...arr2];
// const arr3 = myArray.concat(arr2);

let username = "Arad";

// for (const char of username) {
//   console.log(char);
// }

// console.log([...username]);

/// matrix 5 * 5

// [
//   [2, 3, 4],
//   [1, 0, -1],
// ];
function createMatrixZero(row, col) {
  const result = new Array(row);
  for (let i = 0; i < row; i++) {
    result[i] = new Array(col).fill(0);
  }
  return result;
}

// const mat = [
//   [2, 3, 4],
//   [1, 0, -1],
// ];

const mat = createMatrixZero(2, 3);
// console.log(mat);
// console.log(myArray[20]);

// mat[0][0] = 20;
// mat[0][1] = 3;
// mat[0][2] = 4;
// mat[1][0] = 1;
// console.log(mat[1]);

// let a = new Array();
// a.fill(false);x
// console.log(a);

// console.log(createMatrixZero(12, 18));
// console.log(new Array(2, 3, 4, "a"));

// myArray[12] = "Sepehr";
// for (const iterator of myArray) {
//   console.log(iterator);
//   console.log("Salam");
// }

//// Set ===> haman majmueha dar dabirestan

console.log(new Set([1, 2, 3, 4, 2, 3, 4, 3]));
