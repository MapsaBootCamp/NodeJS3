const arr1 = [1, 2, 3, 3];
const arr2 = [6, 2, "a", "b"];

// console.log(new Set([1, 2, 1, true, "a", true, "b", 2, "a"]));

function findUnCommon(arr1, arr2) {
  // const result = new Set(arr1.concat(arr2));
  const result = new Set([...arr1, ...arr2]);
  result.forEach((item) => {
    if (arr1.includes(item) && arr2.includes(item)) {
      result.delete(item);
    }
  });
  return [...result];
}

console.log(findUnCommon(arr1, arr2));
