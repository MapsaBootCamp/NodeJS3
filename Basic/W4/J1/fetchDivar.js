const fs = require("fs");

const url = "https://api.divar.ir/v8/web-search/tehran/vehicles";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let result = "";
    for (let item of data?.web_widgets?.post_list) {
      result += `title: ${item.data.title}\n`;
    }
    fs.writeFile("data.txt", result, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
