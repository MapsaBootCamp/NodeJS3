require("dotenv").config();
const express = require("express");
const router = require("./routes");
const { logger } = require("./middlewares");
const { ValidationError } = require("./errors");
const app = express();
const client = require("./db");

const PORT = process.env.PORT;

/// middlewares

app.use(express.json()); // if content-type is application/json then parse data as json
app.use(logger);

app.get("/", (req, res) => {
  return res.send("Welcome");
});

app.use("/api/v1", router);

app.use((err, req, res, next) => {
  let message = "server error";
  let statusCode = 500;
  let nameError = "Error";

  if (err instanceof ValidationError) {
    message = err.message;
    statusCode = err.statusCode;
    nameError = err.name;
  }

  return res.status(statusCode).json({
    error: true,
    nameError,
    message,
  });
});

client
  .connect()
  .then(async () => {
    console.log("connected to db");
    const customers = await client.query("SELECT * FROM customer;");
    for (const customer of customers.rows) {
      console.log("+++++++++++++++++");
      console.log(customer);
      console.log("+++++++++++++++++");
    }
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
