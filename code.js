const ks = require("node-key-sender");
const h = 0;
const m = 0;
const s = 10;

console.log(
  `Firing at ${new Date(Date.now() + 3600000 * h + 60000 * m + 1000 * s)}`
);

setTimeout(() => {
  ks.sendText("Test ;p").then();
  setTimeout(() => {
    ks.sendKey("enter");
  }, 5000);
}, 3600000 * h + 60000 * m + 1000 * s);
