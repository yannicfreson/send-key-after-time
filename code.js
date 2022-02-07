const ks = require("node-key-sender");
const h = 3;
const m = 15;
const s = 0;

console.log(
  `Firing at ${new Date(Date.now() + 3600000 * h + 60000 * m + 1000 * s)}`
);

setTimeout(() => {
  ks.sendText("Early Bird 1/7 ;p").then();
  setTimeout(() => {
    ks.sendKey("enter");
    setTimeout(() => {
      ks.sendKey("enter");
    }, 2000);
  }, 3000);
}, 3600000 * h + 60000 * m + 1000 * s);
