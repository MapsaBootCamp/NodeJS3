Promise.resolve("Resolved promise 1 Immediately").then((data) =>
  console.log(data)
);
setTimeout(
  () => console.log("Resolved setTime 1 after 0 seconds setTimeout"),
  0
);
Promise.resolve("Resolved promise 2 Immediately").then((data) =>
  console.log(data)
);
setTimeout(
  () => console.log("Resolved setTime 2 after 0 seconds setTimeout"),
  0
);
Promise.resolve("Resolved promise 3 Immediately").then((data) =>
  console.log(data)
);

const myObj = {
  age: 12,
  async printAge() {
    return this.age;
  },
};

myObj.printAge().then((age) => console.log(age));
