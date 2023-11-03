function sleep(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) reject("zaman entezar manfi nadarim!");
    setTimeout(() => resolve(), ms);
  });
}
const AMATEUR_ = 20;
const WIN_STEP = 3;
const AMATEUR_ACT_TIME = 5;
const PROFESIONAL_ACT_TIME = 1;

async function amateurAct(user) {
  await sleep(AMATEUR_ACT_TIME * 1000);
  console.log(`user ${user} harkat zad`);
}

(async function champion() {
  let startTime = Date.now();
  for (let j = 0; j < WIN_STEP; j++) {
    for (let i = 0; i < AMATEUR_; i++) {
      await sleep(PROFESIONAL_ACT_TIME * 1000);
      console.log("professional act anjm dad");
      amateurAct(i);
    }
  }
  console.log("zaman kole champion: ", Date.now() - startTime, "ms");
})();
