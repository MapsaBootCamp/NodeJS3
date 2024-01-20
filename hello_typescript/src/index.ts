//======================== primitive type

let user: string = "Ashkan";
let age: number = 23;
let active: boolean = true;

let harchi: any;
harchi = "A";
harchi = 23;

function helloUser(user: string, age: number): void {
  console.log(`hello ${user}`);
}

/// Functions Which Return Promises

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// helloUser("Kokab", 43);
// console.log("Hello Gholam");

// ========================================= array type

const users: string[] = ["Kolsum", "Mammad", "Heshmat", "Mohsen"];
const listData: any[] = [3, "A", true];

// tuple
const mytuple: [string, number, number?] = ["Kokab", 23, 43];

//// Object Types
const userData: { username: string; age: number; active?: boolean } = {
  username: "A",
  age: 34,
  active: true,
};

console.log(userData?.active);

/// Union Types

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(3);
printId("A");
// printId(true); /// error

// function printId1(id: number | string) {
//   console.log(id.toUpperCase());
// }

/// solution
function printId2(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

//// Type Aliases

type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 12, y: 21 };

type ID = number | string;

const userId: ID = "eogjeohg-lkflkehg3-3434knkjd";

///// interface

enum Gender {
  male,
  female,
}

type Point3D = Point & { z: number };

interface Person {
  username: string;
  age: number;
  gender?: Gender;
}

interface Person {
  password: string;
}

const person: Person = {
  username: "A",
  age: 32,
  password: "22",
};

interface IDBConnection {
  hostname: string;
  port: number;
  dbName: string;
  username?: string;
  password?: string;
  connect: (url?: string) => void;
}

class DBConnection implements IDBConnection {
  private url: string;

  constructor(
    public readonly hostname: string,
    public readonly port: number,
    public readonly dbName: string,
    public readonly username?: string,
    public readonly password?: string
  ) {
    this.createUrl();
  }

  createUrl(url?: string) {
    if (url) {
      console.log("etesal ba khodesh", url);
    }
    this.url = `postgres://${this.hostname}:${this.port}@${this.username}:${this.password}`;
  }

  connect() {
    console.log("etesal be db");
  }
}

const dBConnection = new DBConnection("localhost", 20, "test");
console.log(dBConnection.hostname);
dBConnection.connect();

///// Enum

enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}
console.log("enum up", Direction.Down);

function getId(username: string): string | number {
  return `${username}-kehgklehgkhe`;
}

const jamalId = getId("Manoochehr") as string;

type inputServerType = "a" | "b" | "c";

// const server: inputServerType = "d"; /// error
