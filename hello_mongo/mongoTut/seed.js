const fs = require("fs");
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("test");
    const coll = db.collection("restaurant");
    const data = fs.readFileSync("./restaurants.json", "utf8");
    const content = data.split("\n").map((item) => JSON.parse(item));
    await coll.insertMany(content);
  } finally {
    await client.close();
  }
}

run().catch((err) => console.log(err));
