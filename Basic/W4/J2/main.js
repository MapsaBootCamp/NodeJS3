const fs = require("fs");

////////////////////////////////////////////////  how to create promise
// function waiter(time_) {
//   return new Promise((resolve, reject) => {
//     if (time_ < 0) {
//       reject("khengul manfi kasi vay nemisteh");
//     } else {
//       setTimeout(() => resolve("man resolve shodam"), time_);
//     }
//   });
// }

// // waiter(-2)
// waiter(3e3)
//   .then(
//     (val) => console.log(val)
//     //   (err) => console.log(err)
//   )
//   .catch((err) => {
//     console.log(err);
//   });

///// Example: promisify https nodeJS
// const https = require("https");

// function getText(url) {
//   return new Promise((resolve, reject) => {
//     request = https.get(url);

//     request.on("response", (response) => {
//       let httpStatus = response.statusCode;
//       response.setEncoding("utf-8");
//       let body = "";

//       response.on("data", (chunk) => {
//         body += chunk;
//       });
//       response.on("end", () => {
//         if (httpStatus === 200) {
//           resolve(body);
//         } else {
//           reject(httpStatus);
//         }
//       });
//     });
//     request.on("error", (err) => {
//       reject(err);
//     });
//   });
// }

// const url = "https://jsonplaceholder.typicode.com/posts";

// getText(url)
//   .then((data) => console.log("data: ", JSON.parse(data)))
//   .catch((err) => console.log("err", err));

///////////////////// async/await

function writeFilePromisify(filePath, data) {
  return new Promise((res, rej) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        rej("err");
      } else {
        res("ba moafaghiat anjam shod");
      }
    });
  });
}

async function fetchDivar(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    let result = "";
    for (let item of data?.web_widgets?.post_list) {
      result += `title: ${item.data.title}\n`;
    }
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("moshkeli rokh dadeh");
  }
}

// (async function getAndWrite() {
//   const data = await fetchDivar();
//   const natijeh = await writeFilePromisify("data.txt", data);
//   console.log(natijeh);
// })();

Promise.resolve(3).then((val) => console.log(val));
Promise.reject(30).catch((val) => console.log(val));

myPromises = [
  Promise.resolve(3),
  Promise.resolve(4),
  //   Promise.reject(12),
  Promise.resolve(5),
  //   Promise.reject(50),
];

Promise.all(myPromises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const urls = [
  "https://api.divar.ir/v8/web-search/tehran/car",
  "https://api.divar.ir/v8/web-search/tehran/motorcycles",
];
promises = urls.map((url) => fetchDivar(url));

// Promise.all(promises).then((results) => {
//   for (const indx in results) {
//     console.log(urls[indx]);
//     console.log(results[indx]);
//   }
// });

Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(
  (results) => {
    console.log(results[0]); // => { status: "fulfilled", value: 1 }
    console.log(results[1]); // => { status: "rejected", reason: 2 }
    console.log(results[2]); // => { status: "fulfilled", value: 3 }
  }
);

// getAndWrite();

// async () => {

// }
