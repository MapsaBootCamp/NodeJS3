//// enum string to string example

enum Color {
  Brown = "#A52A2A",
  DarkBlue = "#00008B",
  Green = "#008000",
}

const doColor = (color: Color) => {
  console.log(`${color} is OK!`);
};

// doColor(Color.Brown);

/// any vs unknown vs never

const number: any = 12;
const numbers: any = [2, 3];
const c = number + numbers;

let a: unknown = 12;

//// narrowing
if (typeof a == "number") {
  let b = a + 12;
}

function doSomthing(): never {
  throw new Error();
  // while (true) {}
}

// doSomthing();
console.log("GoodBye!");

////// intersection type ===> &
interface A1 {
  username: string;
}

interface B1 {
  pass: string;
}

type User = A1 & B1;

const user1: User = {
  username: "A",
  pass: "B",
};
