// const url = "https://jsonplaceholder.typicode.com/posts";
const url = "https://api.divar.ir/v8/web-search/tehran/vehicles";

fetch(url)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("natunes begire");
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else if (contentType && contentType.indexOf("text/html") !== -1) {
      return response.text();
    } else {
      throw new Error("man faghat text va json mitunam parse konem");
    }
  })
  .then((data) => {
    for (let item of data?.web_widgets?.post_list) {
      console.log("title: ", item.data.title);
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
