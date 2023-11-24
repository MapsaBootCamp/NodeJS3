import * as fs from "fs";
import { Stream } from "stream";
import { createGzip } from "zlib";

function callBackFirstError(err, data) {
  if (err) {
    console.log("err", err);
  }
  console.log("data", data);
}

function gZip(pathFile) {
  const source = fs.createReadStream(pathFile);
  const destination = fs.createWriteStream(pathFile + ".gz");

  source
    .on("error", callBackFirstError)
    .pipe(createGzip())
    .pipe(destination)
    .on("error", callBackFirstError)
    .on("finish", () => {
      console.log("payan zip kardan");
    });
}

gZip("note.txt");
