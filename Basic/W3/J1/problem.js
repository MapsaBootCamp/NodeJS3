///// Q1: create map, filter using reduce function

const arr = [3, 4, 5, 2, 3, 4, 12];
// console.log(arr.map((val) => val * 2));

// array.reduce(callback, init);

function myMap(arr, callback) {
  return arr.reduce((prevVal, currVal) => {
    prevVal.push(callback(currVal));
    return prevVal;
  }, []);
}

// console.log(myMap(arr, (val) => val * 2));

// console.log(arr.filter((val) => val > 3));

function myFilter(arr, callback) {
  return arr.reduce((prevVal, currVal) => {
    callback(currVal) ? prevVal.push(currVal) : null;
    return prevVal;
  }, []);
}

// console.log(myFilter(arr, (val) => val > 3));

/// Q2: function that get two matrices and return muliply of them

function muliplyMatix(mat1, mat2) {
  let mat1Row = mat1.length;
  let mat1Col = mat1[0].length;
  let mat2Row = mat2.length;
  let mat2Col = mat2[0].length;
  if (mat1Col !== mat2Row) throw new Error("matrix multiply can't be done!");

  const result = [];

  for (let i = 0; i < mat1Row; i++) {
    let tempRow = [];
    for (let j = 0; j < mat2Col; j++) {
      let summ = 0;
      for (let k = 0; k < mat2Row; k++) {
        summ += mat1[i][k] * mat2[k][j];
      }
      tempRow[j] = summ;
    }
    result.push(tempRow);
  }
  return result;
}

const mat1 = [
  [2, 3],
  [1, 1],
];

const mat2 = [[5], [2]];

console.log(muliplyMatix(mat1, mat2));
