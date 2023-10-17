//////////////////////////////////////// sort

// 1. bubble sort

function bubbleSort(arr) {
  arr_copy = [...arr];
  for (let i = 0; i < arr_copy.length - 1; i++) {
    for (let j = 0; j < arr_copy.length - 1 - i; j++) {
      if (arr_copy[j] > arr_copy[j + 1]) {
        let temp = arr_copy[j];
        arr_copy[j] = arr_copy[j + 1];
        arr_copy[j + 1] = temp;
      }
    }
  }
  return arr_copy;
}

const myArray = [2, 12, -2, 8, 21, 3];
// console.log(bubbleSort(myArray));
// console.log(myArray);

//// [2, 12, -2, 8, 21, 3]

function insertionSort2(array) {
  let temp, key;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      key = array[i];
      for (let j = i - 1; j >= 0; j--) {
        if (key >= array[j]) {
          break;
        } else {
          //   [array[j], array[j + 1]] = [array[j + 1], array[j]]
          temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}

function insertionSort(arr) {
  const array = [...arr];
  let element;
  for (let i = 1; i < array.length; i++) {
    element = array[i];
    j = i - 1;
    while (j >= 0 && element < array[j]) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = element;
  }
  return array;
}
// console.log(insertionSort2(myArray));

/// Q2: euler project
// function fibo(indx) {
//   if (indx === 1) return 1;
//   if (indx === 2) return 2;
//   return fibo(indx - 1) + fibo(indx - 2);
// }

// let counter = fibo(1);
// let indx = 1;
// let sum = 0;

// while (counter < 4_000_000) {
//   if (counter % 2 === 0) {
//     sum += counter;
//   }
//   indx++;
//   counter = fibo(indx);
// }

// console.log(sum);

/// Q3: euler project

function isPrime(num) {
  let flag = true;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

let myNum = 600851475143;
let maxFactor = 2;
for (let i = 2; i <= myNum; ) {
  if (myNum % i === 0) {
    myNum /= i;
    maxFactor = i;
    continue;
  }
  i++;
}
function reverse(s) {
  return [...s].reverse().join("");
}

function findMaxPalindrom() {
  let multiply;
  let maxPalind = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      multiply = String(i * j);
      if (multiply.slice(0, 3) == reverse(multiply.slice(3, 6))) {
        if (maxPalind < Number(multiply)) {
          maxPalind = Number(multiply);
        }
      }
    }
  }
  return maxPalind;
}

console.log(findMaxPalindrom());
