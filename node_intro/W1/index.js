import 'dotenv/config';
// import A, { sayHello } from './module_a.js';
import { sayHello } from './module_a.js';
import * as util from 'util';
import * as fs from 'fs';

const pfs = {
  readFile: util.promisify(fs.readFile),
};

pfs.readFile().then(() => {});

// process.setUncaughtExceptionCaptureCallback((e) => {
//   console.error('Uncaught exception:', e);
// });

// process.on('unhandledRejection', (reason, promise) => {
//   // reason is whatever value would have been passed to a .catch() function
//   // promise is the Promise object that rejected
//   console.log('promise: ', promise);
//   console.log('reason: ', reason);
// });

// const sleep = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
// };

Promise.resolve().then(() => {
  console.log('Bye promise 1');
  throw new Error('promise aval');
});

Promise.resolve().then(async () => {
  console.log('Bye promise 2');
  let counter = 0;
  for (let index = 0; index < 10e6; index++) {
    counter++;
  }
  console.log('khodafez');
  // throw new Error('promise aval');
});

Promise.resolve().then(() => {
  console.log('Bye promise 3');
});

setTimeout(() => {
  console.log('Bye sefr');
  // throw new Error('callback aval');
}, 0);

setTimeout(() => {
  console.log('Bye1');
  // throw new Error('callback aval');
}, 4000);
setTimeout(() => console.log('Bye2'), 5000);

// const aObj = new A();
sayHello('Mammad');
const user = 'Ashkan';

if (user) {
  console.log(user);
}

// (function error() {
//   throw new Error('harchi');
// })();

// console.error('Salam');

console.log('server run on PORT: ', process.env.PORT);
console.log(process.env.Private_Key);

// console.log(process.argv);
// console.log(process.env);

/// https://www.bannerbear.com/images/ghost/2022-06-13-5-image-apis-you-can-use-for-your-next-project-in-2022/6.jpeg
