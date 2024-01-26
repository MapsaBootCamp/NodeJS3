const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("test");
    const coll = db.collection("restaurant");

    //// Q2
    // const data = await coll
    //   .find(
    //     {},
    //     { projection: { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } }
    //   )
    //   .toArray();

    //// Q3
    // const data = await coll
    //   .find(
    //     {},
    //     {
    //       projection: {
    //         _id: 0,
    //         restaurant_id: 1,
    //         name: 1,
    //         borough: 1,
    //         cuisine: 1,
    //       },
    //     }
    //   )
    //   .toArray();

    //// Q5
    const data = await coll
      .find({ grades: { $elemMatch: { score: { $gt: 95, $lt: 100 } } } })
      .limit(5)
      .toArray();

    for (const item of data) {
      console.log(item.grades);
      break;
    }

    // console.log(data);
  } finally {
    await client.close();
  }
}

run().catch((err) => console.log(err));
