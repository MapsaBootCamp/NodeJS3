import * as http from "http";
import * as fs from "fs";
import * as url from "url";

const server = new http.Server();

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

server.listen(3000);

server.on("request", (request, response) => {
  const path = url.parse(request.url).pathname;
  console.log(path);
  console.log("method", request.method);

  function home(request, response) {
    const source = fs.createReadStream("index.html");
    source
      .on("error", (err) => {
        response.write("error");
        response.end();
      })
      .pipe(response);
  }

  function user(req, res) {
    res.setHeader("Content-Type", "application/json;");
    res.write(JSON.stringify(users));
    res.end();
  }

  const routing = {
    "/": home,
    "/user": user,
  };

  if (!routing.hasOwnProperty(path)) {
    response.write("nadaram");
    return response.end();
  }

  return routing[path](request, response);

  //   response.end();
});
