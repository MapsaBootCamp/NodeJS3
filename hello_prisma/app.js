require("dotenv").config();
const express = require("express");
const { userRouter, taskRouter } = require("./routes");
const { PrismaClientKnownRequestError } = require("@prisma/client");
const { MyError } = require("./error");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

/// Routes
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

/// Not Found
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

/// error handlers
const prismaErrMap = new Map();
prismaErrMap.set("P2002", "chenin user darim! ye username dg bezan");

app.use((err, req, res, next) => {
  if (err instanceof PrismaClientKnownRequestError) {
    const errMessage = prismaErrMap.get(err.code);
    const error = new MyError(errMessage, 400);
    next(error);
  } else {
    const defaultError = new MyError(err.message, 400);
    next(defaultError);
  }
});

app.use((err, req, res, next) => {
  if (err instanceof MyError) {
    return res.status(err.code).json({
      status: "error",
      errCode: err.code,
      message: err.message,
    });
  }
  return res.json({
    status: "error",
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is runnnig on port ${PORT}`);
});
