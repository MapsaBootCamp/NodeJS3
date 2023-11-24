import * as fs from "fs";
import { dirname, sep, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

// const data = fs.readFileSync(__dirname + sep + "oldImg.png");
const data = fs.readFileSync(join(__dirname, "oldImg.png"));

function printByte(buf) {
  let decimal = 0;
  for (let i = 0; i < buf.length; i++) {
    decimal += parseInt(buf[buf.length - i - 1]) * Math.pow(16, 2 * i);
  }
  return decimal;
}

const bufNum = Buffer.alloc(4);
console.log(759112765);
bufNum.write(Number(759112765).toString(16), "hex");
console.log(Number(759112765).toString(16));
console.log(bufNum);

console.log("width: ", data.subarray(16, 20));
console.log("height: ", data.subarray(20, 24));
console.log(printByte(data.subarray(16, 20)));
console.log(printByte(bufNum));
