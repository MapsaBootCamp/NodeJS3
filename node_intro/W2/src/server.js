import * as http from "http";
import * as url from "url";

const express = () => {
  return new (class CustomExpress {
    constructor() {
      this.server = new http.Server();
      this.routing = { GET: {}, POST: {} };

      this.server.on("request", (req, res) => {
        const path = url.parse(req.url).pathname;

        if (!this.routing[req.method].hasOwnProperty(path)) {
          res.write("nadaram");
          return res.end();
        }
        this.routing[req.method][path](req, res);
      });
    }

    get(path, cb) {
      if (typeof path !== "string") {
        throw new Error("path baiad string bashe");
      }
      if (typeof cb !== "function") {
        throw new Error("cb baiad function bashe");
      }
      this.routing.GET[path] = cb;
    }

    post(path, cb) {
      if (typeof path !== "string") {
        throw new Error("path baiad string bashe");
      }
      if (typeof cb !== "function") {
        throw new Error("cb baiad function bashe");
      }

      this.routing.POST[path] = cb;
    }

    listen(port, cb) {
      try {
        this.server.listen(port);
        cb();
      } catch (error) {
        throw new Error(error);
      }
    }
  })();
};

export default express;
