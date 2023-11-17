// const typedArr = Int16Array.from([12, 255]);
// const typedArrUnsigned = Uint8Array.from([12, 255, 12]);
// console.log(typedArrUnsigned);

const startTime = Date.now();

function findGreatestPrime(num_) {
  for (let i = num_; i >= 2; i--) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
}

function findGreatestPrimeArray(num_) {
  const result = [];
  for (let i = 2; i <= num_; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(i);
  }
  return result.at(-1);
}

function findGreatestPrimeArrayOpt(num_) {
  let a = new Array(num_ + 1);
  let max = Math.sqrt(num_);
  let p = 2;
  while (p <= max) {
    for (let i = 2 * p; i <= num_; i += p) a[i] = 1;
    while (a[++p]);
  }

  while (a[num_]) num_--;
  return num_;
}

function findGreatestPrimeTypedArray(num_) {
  let a = new Uint8Array(num_ + 1);
  let max = Math.sqrt(num_);
  let p = 2;
  while (p <= max) {
    for (let i = 2 * p; i <= num_; i += p) a[i] = 1;
    while (a[++p]);
  }

  while (a[num_]) num_--;
  return { lastPrime: num_, allPrimes: a };
}
console.log(findGreatestPrimeArrayOpt(5000000));
console.log('runtime: ', Date.now() - startTime, 'ms');
let num = 1600000;
console.log(
  'all primes before: ',
  num,
  findGreatestPrimeTypedArray(num).allPrimes.filter((x) => x === 0).length,
);
