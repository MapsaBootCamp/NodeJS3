// یافتن همه مقسوم علیه های ۳ و ۵

const maxNumber = 100;

// for (let i = 0; i < maxNumber; i++) {
//   // if (i % 3 == 0 && i % 5 == 0) {
//   //   console.log(i);
//   // }
//   if (i % 15 == 0) {
//     console.log(i);
//   }
// }

// prime number ===> dividers only 1, itself

for (let i = 2; i < 1000; i++) {
  let flag = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(i);
  }
}

/// bmm

let firstNum = 12;
let secondNum = 18;
let temp;

if (firstNum < secondNum) {
  temp = firstNum;
  firstNum = secondNum;
  secondNum = temp;
}

// if (firstNum < secondNum) {
//   [firstNum, secondNum] = [secondNum, firstNum];
// }

while (secondNum) {
  temp = firstNum;
  firstNum = secondNum;
  secondNum = temp % secondNum;
}

console.log(firstNum);
