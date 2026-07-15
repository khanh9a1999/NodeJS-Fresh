console.log("Start");

process.nextTick(() => {
  console.log("NextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");