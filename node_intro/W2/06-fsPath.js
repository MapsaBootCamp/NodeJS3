import { fileURLToPath } from "url";
import * as path from "path";
import * as fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const statFile = fs.statSync(__filename);

// console.log(statFile.isFile());
// console.log(statFile.isDirectory());
// console.log(statFile.size);

console.log("directory", __dirname);
console.log(path.basename(__dirname));
console.log(path.basename(path.dirname(__dirname)));
console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// path.basename(path.dirname(p))
