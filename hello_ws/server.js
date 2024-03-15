import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { Server } from "socket.io";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import jwt from "jsonwebtoken";
import cookie from "cookie";
// open the database file
const db = await open({
  filename: "chat.sqlite3",
  driver: sqlite3.Database,
});
import * as constant_ from "./constant.js";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

const app = express();
const server = createServer(app);
const io = new Server(server);

const pubClient = createClient({ url: "redis://localhost:6379" });
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

io.adapter(createAdapter(pubClient, subClient));

// create our 'messages' table (you can ignore the 'client_offset' column for now)
await db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_offset TEXT UNIQUE,
      content TEXT
  );
`);

await db.exec(`
CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
  );
`);

const sayHelloNameSpace = io.of("/hello");

sayHelloNameSpace.use((socket, next) => {
  console.log("log dar middle");
  next();
});

sayHelloNameSpace.on("connection", (socket) => {
  console.log("ye say hello be man vasl shod");
  socket.emit("salam", "mapsa");
});

const SECRET_KEY = "eoghiehghehigiewh";

app.use(express.urlencoded({ extended: true }));
io.use((socket, next) => {
  try {
    const extractedCookie = socket.handshake.headers.cookie;
    const parsedCookie = cookie.parse(extractedCookie);
    const payload = jwt.verify(parsedCookie["access_token"], SECRET_KEY);
    socket.user = payload;
    next();
  } catch (error) {
    next({
      status: "error",
      code: constant_.CREDENTIAL_ERROR_CODE,
      message: "error jwt",
    });
  }
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app
  .route("/auth/register")
  .get((req, res, next) => {
    res.sendFile(join(__dirname, "register.html"));
  })
  .post(async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await db.run(
        "INSERT INTO user (username, password) VALUES (?, ?)",
        username,
        password
      );
      return res.json(username);
    } catch (error) {
      next(error);
    }
  });

app
  .route("/auth/login")
  .get((req, res, next) => {
    res.sendFile(join(__dirname, "login.html"));
  })
  .post(async (req, res, next) => {
    try {
      const { username, password } = req.body;
      let sql = `SELECT username, password
           FROM user
           WHERE username  = ?`;

      const user = await db.get(sql, [username]);
      if (!user || user.password !== password) {
        throw new Error("incorrect credential");
      }
      const token = jwt.sign({ sub: username }, SECRET_KEY);

      return res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .redirect("/");
    } catch (error) {
      next(error);
    }
  });

io.on("connection", async (socket) => {
  socket.emit("connected-user", socket.user.sub);
  console.log("user: ", socket.user);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("typing", (msg) => {
    socket.broadcast.emit("typing", msg);
  });
  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing", "");
  });
  socket.on("chat message", async (msg, clientOffset) => {
    let result;
    try {
      result = await db.run(
        "INSERT INTO messages (content, client_offset) VALUES (?, ?)",
        msg,
        clientOffset
      );
    } catch (e) {
      if (e.errno === 19 /* SQLITE_CONSTRAINT */) {
        callback();
      } else {
        // nothing to do, just let the client retry
      }
      return;
    }
    io.emit("chat message", msg, result.lastID);
  });

  if (!socket.recovered) {
    try {
      await db.each(
        "SELECT id, content FROM messages WHERE id > ?",
        [socket.handshake.auth.serverOffset || 0],
        (_err, row) => {
          socket.emit("chat message", row.content, row.id);
        }
      );
    } catch (e) {
      // something went wrong
    }
  }
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
