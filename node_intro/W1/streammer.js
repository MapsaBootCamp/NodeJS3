// const fs = require('fs');
// const zlib = require('zlib');

import * as fs from 'fs';
import * as zlib from 'zlib';

function gzip(filename, callback) {
  // Create the streams
  let source = fs.createReadStream(filename);
  let destination = fs.createWriteStream(filename + '.gz');
  let gzipper = zlib.createGzip();
  // Set up the pipeline
  source
    .on('error', (err) => callback(err, null))
    // call callback on read error
    .pipe(gzipper)
    .pipe(destination)
    .on('error', (err) => callback(err, null))
    // call callback on write error
    .on('finish', (msg) => callback(null, msg)); // call callback when writing is complete
}

gzip('note.txt', (err, message) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('message', message);
  }
});
