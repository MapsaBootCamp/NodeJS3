require("dotenv").config();
const express = require("express");
const { userRoute } = require("./routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // if content-type is application/json then parse data as json

app.get("/", (req, res) => {
  return res.send("Welcome");
});

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
