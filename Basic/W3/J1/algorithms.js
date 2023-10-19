// merge sort
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const left = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.ceil(arr.length / 2)));

  console.log("left: ", left);
  console.log("right: ", right);

  let result = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  result = [...result, ...left];
  result = [...result, ...right];
  console.log("result: ", result);
  return result;
}

const testArr = [2, 4, -1, 12, 8, 12, 20, 0];
// console.log(mergeSort(testArr));

/// Q2: coin change ===> pooleDorosht  coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000]

/**
 *
 * @param {number} pooleDorosht
 * @param {Array} coins
 */

function coinChange(pooleDorosht, coins) {
  let coinsSorted = coins.sort((a, b) => b - a);

  let result = {};
  for (const coin of coinsSorted) {
    console.log(pooleDorosht / coin);
    while (pooleDorosht / coin >= 1) {
      result[coin] ? result[coin]++ : (result[coin] = 1);
      pooleDorosht -= coin;
    }
  }
  return result;
}

const pooleDorosht = 153;
const coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
console.log(coinChange(pooleDorosht, coins));
