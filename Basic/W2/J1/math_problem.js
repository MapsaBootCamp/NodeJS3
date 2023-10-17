function factoriel(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorielRecursive(num) {
  if (num === 1) return 1;
  return num * factorielRecursive(num - 1);
}

// console.log(factorielRecursive(5));
// console.log(factoriel(5));

function fibo(indx, cache = {}) {
  if (indx === 1 || indx === 2) return 1; // stop condition
  if (cache.hasOwnProperty(indx)) return cache[indx];
  else return (cache[indx] = fibo(indx - 1, cache) + fibo(indx - 2, cache));
}

console.log(fibo(50));
