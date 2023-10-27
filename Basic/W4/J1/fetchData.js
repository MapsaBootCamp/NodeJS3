const https = require("https");

// Read the text content of the URL and asynchronously pass it to the callback.
function getText(url, callback) {
  // Start an HTTP GET request for the URL
  request = https.get(url);
  // Register a function to handle the "response" event.
  request.on("response", (response) => {
    // The response event means that response headers have been received
    let httpStatus = response.statusCode;
    // The body of the HTTP response has not
    // So we register more event handlers to
    response.setEncoding("utf-8"); // We're
    let body = "";

    // This event handler is called when a chunk of the body is ready
    response.on("data", (chunk) => {
      body += chunk;
    });
    // This event handler is called when the response is complete
    response.on("end", () => {
      if (httpStatus === 200) {
        // If the HTTP response was good
        callback(null, body);
        // Pass response body to the callback
      } else {
        // Otherwise pass an error
        callback(httpStatus, null);
      }
    });
  });
  // We also register an event handler for lower-level network errors
  request.on("error", (err) => {
    callback(err, null);
  });
}

// const url = "https://jsonplaceholder.typicode.com/posts";

// getText(url, (err, text) => {
//   if (err) {
//     console.log("err", err);
//   } else {
//     console.log("data: ", JSON.parse(text));
//   }
// });
