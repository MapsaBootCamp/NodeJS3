require("dotenv").config();
const express = require("express");
const { userRouter, taskRouter } = require("./routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.listen(PORT, () => {
  console.log(`server is runnnig on port ${PORT}`);
});
