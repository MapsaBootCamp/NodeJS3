import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
