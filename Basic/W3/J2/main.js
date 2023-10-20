/////// template literal

let varName = "Milad";
let varAge = 23;
const myTemplateLiteral = `Salam ${varName}, ${varAge} saleh`;
console.log(myTemplateLiteral);

/////////////////// Object

/// object creation using object literals

const book = {
  "main name": "maghzaye zang zadeh",
  author: "Maghz",
  nasheran: { name: "cheshmeh" },
};

book["main name"];
book.author;

// console.log(book.nasher); /// undefined
// console.log(book.nasher.name); /// inja fosh mide
// console.log(book.nasheran?.address?.city); /// dg fosh nadarim

/// create object using new keyword

const obj = new Object();
obj.username = "Gholam";
console.log(obj);

const d = new Date();
console.log(d);

const myMap = new Map();
// myMap.set("username", { nickname: "Gholam", nameAsli: "Daniel" });
// myMap.set("password", "1234");
// console.log(myMap.get("a"));
// for (let [key, val] of myMap.entries()) {
//   console.log("key", key);
//   console.log("val", val);
// }
// myMap.set("username", "Mahan");
// console.log(myMap.get("username"));
// console.log(myMap.keys());
// console.log(myMap.has("password"));
// console.log(myMap.size)

//////// Prototypes

// Object.prototype.yechizi = "Mapsa";
// const myObj = {
//   username: "Gholam",
// };

// console.log(myObj.yechizi);
// console.log(myObj.hasOwnProperty("username"));
// console.log(myObj.hasOwnProperty("yechizi"));

// for (const key in myObj) {
//   console.log(key);
// }

const o1 = {
  x: 23,
  y: 34,
};
const o2 = Object.create(o1);
const o3 = Object.create(o2);

// console.log(o2);
// console.log(o1);
// console.log(o3.x);
// console.log(o2);

const user = {
  username: "Gholam",
  password: "1234",
  token: null,
  //   login: function () {
  //     console.log("Salam");
  //   },
  login(username, password) {
    if (this.username === username && this.password === password) {
      console.log(`Salam ${this.username}`);
      this.token = "elihfelihgiegh1212";
    } else {
      console.log("username or password not correct");
    }
  },
};

// user.login("Gholam", "1234");
// delete user.token;
// console.log(user);
// console.log("toke" in user);

/////////////////////////////// Extending Objects

let target = { x: 1 },
  source = { y: 2, z: 3 };

/// 1. rahe aval

// for (const key of Object.keys(source)) {
//   target[key] = source[key];
// }

// console.log(target);

/// 2. rage dovom

// const modifiedTarget = Object.assign(target, source);
// console.log(modifiedTarget);
// console.log(target);

// const newShallowTarget = target; /// shallow copy of target
// target.w = 21;
// console.log(newShallowTarget);

// const newTarget = Object.assign({}, target); /// Deep copy of target
// target.w = 21;
// console.log(newTarget);

/// 3. spread operator ...

const newTarget = { ...target, ...source, y: 24, w: 31 };
// console.log(newTarget);

////// rest operators ...

function myFunction(arg1, ...arg2) {
  console.log("arg1: ", arg1);
  console.log("arg2: ", arg2);
}

myFunction(1, 2, 3, 4, 5);

// const arr1 = [1, 2, 3, 4, 5];
// const [arr2, ...arr3] = [1, 2, 3];
// console.log(arr3);

const obj1 = { x: 1, y: 2, z: 3 };
const { x, ...obj3 } = obj1;
console.log(obj3);

function connectToDb({
  host = "localhost",
  port,
  dbName,
  user,
  password,
  ...options
}) {
  console.log("host: ", host);
}

connectToDb({
  host: "db.example.com",
  port: 5432,
  dbName: "E-Commerce",
  user: "A",
  password: "122",
  typeDate: "Date",
});

const propName = "harchi";
const myObject = {
  [propName]: "Mapsa",
};
console.log(myObject);

////// Serializing Objects
//// https://api.divar.ir/v8/web-search/tehran/vehivles

/*
    Object serialization is the process of converting an 
    object’s state to a string from which it can later be restored.
*/

const serilizerdUser = JSON.stringify(user);
// console.log(serilizerdUser.username); /// undefined
console.log(JSON.parse(serilizerdUser));
