import express from "./server.js";

const app = express();

const users = [
  {
    username: "A",
    age: 12,
  },
  {
    username: "B",
    age: 23,
  },
];

app.get("/", (req, res) => {
  res.write("Salam");
  res.end();
});

app.get("/users", (req, res) => {
  res.setHeader("Content-Type", "application/json;");
  res.write(JSON.stringify(users));
  res.end();
});

app.listen(3001, () => {
  console.log("server is running");
});
