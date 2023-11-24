import * as fs from "fs";
import path from "path";

const event1 = new EvenEmitter();

function recursiveDirRead(startUrl) {
  const result = { files: [], dirs: [] };

  return (async function recGetFile(url = startUrl, baseUrl = null) {
    console.log("url", url);

    const fStat = await fs.promises.stat(url);

    if (fStat.isFile()) {
      throw new Error("url baiad directory bashe");
    }
    const entries = await fs.promises.readdir(url, { withFileTypes: true });

    for (let entry of entries) {
      if (entry.isDirectory()) {
        result.dirs.push(entry.name);
        await recGetFile((url = path.join(url, entry.name)));
      } else {
        result.files.push(entry.name);
      }
    }

    return result;
  })();
}

recursiveDirRead(path.resolve()).then((res) => console.log(res));
