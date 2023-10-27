/////////////////////////////// Object vs Map

const myMap = new Map();
const myObj = {
  username: "Sadra",
  age: 19,
  login() {
    console.log(this.username);
  },
};

// myMap.set("username", "Reza");
// console.log(Object.fromEntries(myMap));

// for (let key in myObj) {
//   console.log(key);
// }

// for (let i of myMap) {
//   console.log(i);
// }

//// function definition:

/// 1. function declaration
function funName(parameters) {
  //// body
}
funName();

/// 2. function expressions

const myFun = function () {};
myFun();

const myArray = [1, 2, 3, 4, 5];

myArray.map(function (val) {
  return val * 2;
});

myArray.map((val) => val * 2);

/// 3. arrow function

const myArrowFun = () => {
  /// body
};

const sum = (x, y) => {
  return x + y;
};
// const sum = (x, y) => x + y;

/// {"username": "Ashkan"}
// const createUser = (username, age) => {
//   return {
//     username,
//     age,
//   };
// };

const createUser = (username, age) => ({ username, age });

// console.log(createUser("Mina", "21"));

//// Example: function that get a string of L, R, U, D and map to  ←, →, ↑, ↓

// function mapDirectStringToSymbol(str) {
//   const mapToSymbol = new Map([
//     ["L", "←"],
//     ["R", "→"],
//     ["U", "↑"],
//     ["D", "↓"],
//   ]);

//   let result = "";
//   for (let char of str) {
//     char = char.toUpperCase();
//     mapToSymbol.get(char) && (result += mapToSymbol.get(char));
//   }
//   return result;
// }

function mapDirectStringToSymbol(str) {
  let result = "";
  for (let char of str) {
    char = char.toUpperCase();
    switch (char) {
      case "L":
        result += "←";
        break;
      case "R":
        result += "→";
        break;
      case "U":
        result += "↑";
        break;
      case "D":
        result += "↓";
        break;
    }
  }
  return result;
}

// console.log(mapDirectStringToSymbol("LLRLUDUUTl"));

///////// Closures

let scopeGlobal = "MapsaCamp"; /// scope global

function harchi() {
  /// function scope
  const localScope = "local";
  console.log(scopeGlobal);
}

// harchi();

function multiplyByN(n) {
  let myNumber = 12;
  return function (x) {
    console.log("myNumber: ", myNumber);
    return x * n;
  };
}

// const mutiplyBy10 = multiplyByN(10);
// const mutiplyBy14 = multiplyByN(14);
// console.log(mutiplyBy10(2));
// console.log(mutiplyBy10(3));
// console.log(mutiplyBy10(4));
// console.log(mutiplyBy14(5));

function counter() {
  let n = 0;
  return {
    count: function () {
      return ++n;
    },
    reset: function () {
      n = 0;
    },
  };
}

const myCounter = counter();
myCounter.count();
myCounter.count();
// console.log(myCounter.count());
myCounter.reset();
// console.log(myCounter.count());

const myCounterObj = {
  n: 0,
  count() {
    return ++this.n;
  },
  reset() {
    this.n = 0;
  },
};
myCounterObj.count();
myCounterObj.count();
// console.log(myCounterObj.count());
myCounterObj.reset();
// console.log(myCounterObj.count());

/////////////////////////////// Asynchronous JavaScript

//// 1. callbacks

// setTimeout(function () {
//   console.log("Salam");
// }, 5000);

// console.log("harchi");

// let counterTime = 0;

// function timerYekSanie() {
//   counterTime++;
//   console.log(counterTime);
// }

// let updateIntervalId = setInterval(timerYekSanie, 1000);

// setTimeout(() => clearInterval(updateIntervalId), 1e4);

const myButton = document.getElementById("myButton");
console.log(myButton);
myButton.addEventListener("click", () => {
  console.log("Salam");
});
