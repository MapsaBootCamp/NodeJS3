/// Q7: inputs: array of numbers ===> return BMM
const testArr = [84, 70, 42, 56];

function gcd(a, b) {
  if (a < b) {
    [a, b] = [b, a]; //// swap
  }

  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function gcdArr(arr) {
  return arr.reduce((prevVal, currVal) => {
    return gcd(prevVal, currVal);
  });
}

function gcdWithoutReduce(arr) {
  let gcdPrev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    gcdPrev = gcd(gcdPrev, arr[i]);
  }
  return gcdPrev;
}

// console.log(gcdArr(testArr));
// console.log(gcdWithoutReduce(testArr));

///// Q8: boxes
const boxes = [2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2];
function boxCreation(arr) {
  let counter = 0;
  arr.reduce((prevVal, curVal) => {
    if (prevVal + curVal > 10) {
      counter++;
      return curVal;
    }
    return prevVal + curVal;
  });
  return counter + 1;
}
console.log(boxCreation(boxes));
