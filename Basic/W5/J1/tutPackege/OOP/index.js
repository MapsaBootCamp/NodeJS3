// class A {
//   prop1 = "Mapsa";
//   #privateProp = "Mapsa";

//   constructor() {}

//   changeProp(inp) {
//     console.log(this.prop1);
//   }
// }

// const a1 = new A();
// const a2 = new A();

// a1.changeProp("a1");
// // a2.changeProp("a2");

// class B {
//   #size = 0;

//   get size() {
//     return this.#size;
//   }
//   set size(val) {
//     console.log("val: ", val);
//     this.#size = val;
//   }
// }

// const b = new B();
// console.log(b.size); //// call getter
// b.size = 12; //// call setter
// console.log(b.size);

class User {
  static counter = 0;
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.logined = false;
    User.counter++;
  }

  login(username, password) {
    // const harchi = () => {
    //   console.log(this);
    // };
    // const self = this;
    // function harchi() {
    //   console.log("this dakhel harchi regular: ", this);
    // }
    // harchi.apply(this);
    if (username === this.username && password === this.password) {
      this.logined = true;
    }
  }

  static getNumberOfUsers() {
    console.log(this);
    console.log("tedad user instance: ", User.counter);
  }

  isLogin() {
    console.log(this);
    console.log("camp: ", camp);
    return this.logined;
  }
}

class AdminUser extends User {
  constructor(username, password, age, isAdmin = false) {
    super(username, password, age);
    this._isAdmin = isAdmin;
  }

  isAdmin() {
    return this._isAdmin;
  }
}

function testThis() {
  console.log("this dakhele ye function hamin vasat: ", this);
}

// testThis();

// console.log("this hamin vasat: ", this);
globalThis.camp = "Mapsa";
// console.log("globalThis: ", globalThis);

const user1 = new User("Ahmad", "1234", 21);
const user2 = new User("Gholam", "1234", 31);
// console.log(user1.username);
// console.log(user2.username);
console.log(user1.isLogin());
// user1.login("Ahmad", "12345");
// console.log(user1.isLogin());
// console.log(user2.isLogin());
// // User.login(); //// Error ===> login not static! ===> first create instance and login call on instance
User.getNumberOfUsers();

const userAdmin1 = new AdminUser("Sakineh", "1234", 21, true);
console.log(userAdmin1.isAdmin());
console.log(userAdmin1.username);
userAdmin1.login("Sakineh1", "1234");
console.log(userAdmin1.isLogin());
