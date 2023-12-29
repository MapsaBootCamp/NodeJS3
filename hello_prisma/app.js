require("dotenv").config();
const express = require("express");
const { userRouter, taskRouter } = require("./routes");
const { PrismaClientKnownRequestError } = require("@prisma/client");
const { MyError } = require("./error");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
require("./config/auth.google");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60 * 60 * 1000, sameSite: "none" },
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.json());

/// Routes
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.get("/", (req, res) => {
  req.session.counter = req.session.counter ? req.session.counter++ : 0;
  console.log("session id", req.session);
  res.send(
    `<p>${req.session.counter}</p><a href='/auth/google'> Google Authenticate </a>`
  );
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/protected", (req, res) => {
  req.session.name = "HELLO";
  console.log(req.user);
  return res.send("OK!");
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

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
