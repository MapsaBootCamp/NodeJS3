console.log("cwd: ", process.cwd()); /// pwd jai ke node date file ra ejra mikone
console.log(process.cpuUsage());
const arr = [];

for (let i = 0; i < 10_000_000; i++) {
  arr.push("ARAD");
}
console.log(
  "headUsage: ",
  Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
  "MB"
);
