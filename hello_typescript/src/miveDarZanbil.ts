function findMaxMivehDarZanbil(fruits: number[]): number {
  let i = fruits.length;
  let j = i - 1;
  let ans = 0;
  const mivehRafteTuZanbil: any = {};

  while (i--) {
    mivehRafteTuZanbil.hasOwnProperty(fruits[i])
      ? mivehRafteTuZanbil[fruits[i]]++
      : (mivehRafteTuZanbil[fruits[i]] = 1);
    console.log(mivehRafteTuZanbil);

    if (Object.keys(mivehRafteTuZanbil).length > 2) {
      console.log("==================================");
      mivehRafteTuZanbil[fruits[j]]--;
      if (mivehRafteTuZanbil[fruits[j]] === 0) {
        delete mivehRafteTuZanbil[fruits[j]];
      }
      j--;
      console.log("PPPPPPAAAAAYAN", mivehRafteTuZanbil);
    }

    ans = Math.max(j - i + 1, ans);
  }

  return ans;
}

console.log(findMaxMivehDarZanbil([1, 1, 1, 1, 2, 3, 2, 1, 2]));
