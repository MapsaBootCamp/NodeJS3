import * as fs from 'fs';

const url =
  'https://news-cdn.varzesh3.com/pictures/2023/11/17/C/mi2ji2xo.jpg?w=800';
const fileName = 'ax.png';

function makeGray(buff) {
  const result = Buffer.alloc(buff.length);
  console.log(buff.length);
  for (let i = 0; i < buff.length - 2; i += 4) {
    result[i] =
      result[i + 1] =
      result[i + 2] =
        (buff[i] + buff[i + 1] + buff[i + 2]) / 3;
  }
  return result;
}

(async function getFile(url, fileName) {
  const response = await fetch(url);
  const arrBuff = await response.arrayBuffer();
  const data = Buffer.from(arrBuff);
  console.log(Buffer.from(data));
  console.log(makeGray(data));
  fs.writeFileSync(fileName, data.subarray(0, 70000));
})(url, fileName);
