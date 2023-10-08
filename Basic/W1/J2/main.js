/*

    important operator:
        ?: ===> ternary operator   condition ? true : false
        ??  a ?? b ?? c

*/

// age = 12
user = { age: 12 };
// user_age = user.ug ?? 15;
// console.log(user.ug);
// console.log(user_age);

///// statement ===> if

// if (user.age > 10) {
//   console.log("bozorg shodi");
// } else if (user.age == 10) {
//   console.log("barikala");
// } else {
//   console.log("hanuz bachei");
// }
if (user.age > 10 && user.age % 2 === 0) {
  // if (user.age > 10 && !(user.age % 2)) {
  console.log("bozorg shodi");
} else if (user.age == 10) {
  console.log("barikala");
} else {
  console.log("hanuz bachei");
}

console.log(isFalthy(null));
console.log(isFalthy(undefined));
console.log(isFalthy([]));
console.log(isFalthy(0));
console.log(isFalthy({}));
console.log(isFalthy(""));

function isFalthy(exp) {
  return exp ? false : true;
}

theme = { color: "blue" };

//// switch, case
switch (theme.color) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  case "yellow":
    console.log("yellow");
    break;
  default:
    console.log("nadanam");
    break;
}

//// loops
let counter = 0;
while (counter < 10) {
  console.log("Salam");
  counter++;
}

do {
  console.log("Salam");
  counter++;
} while (counter < 10);

// for (;;) {
//   console.log(i);
//   i++;
//   if (i > 10) {
//     break;
//   }
// }

/// break, continue
// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (j == 1) {
//       break;
//     }
//     console.log(i);
//   }
//   console.log("salam");
// }

// camelcase: variable, function
const myArray = [1, 2, 37, 12];

for (let item of myArray) {
  console.log(item);
}