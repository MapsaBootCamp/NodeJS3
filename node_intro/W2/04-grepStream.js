import { Transform } from "stream";

class GrepInput extends Transform {
  constructor(pattern) {
    super({ decodeStrings: false });
    this.pattern = pattern;
    this.incompleteLine = "";
  }

  _transform(chunk, encoding, callback) {
    if (typeof chunk !== "string") {
      callback(new Error("Expected a string but got a buffer"));
      return;
    }
    let lines = (this.incompleteLine + chunk).split("\n");
    // console.log("lines", lines);
    // console.log("chunk", chunk);
    // this.incompleteLine = lines.pop();
    // console.log("incompleteLine", this.incompleteLine);

    let output = lines.filter((l) => this.pattern.test(l)).join("\n");

    if (output) {
      output += "\n";
    }

    callback(null, output);
  }
}

const pattern = new RegExp(process.argv[2]);
process.stdin
  .setEncoding("utf8")
  .pipe(new GrepInput(pattern))
  .pipe(process.stdout);
