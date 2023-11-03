setTimeout(() => console.log("MacroTask 1"), 0);

let count = 0;
for (let i = 0; i < 1e9; i++) {
  count++;
}

console.log("stack");
Promise.resolve().then(() => console.log("MicroTask: promise 1"));

setTimeout(
  () => Promise.resolve().then(() => console.log("MicroTask: promise 2")),
  0
);
