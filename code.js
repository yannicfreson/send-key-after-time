const ks = require("node-key-sender");
const h = 3; // hours until
const m = 15; // minutes until
const s = 0; // seconds until
const msg = ""; // message to send

console.log(
  `Firing at ${new Date(Date.now() + 3600000 * h + 60000 * m + 1000 * s)}`
);

setTimeout(() => {
  ks.sendText(msg);
  setTimeout(() => {
    ks.sendKey("enter");
    setTimeout(() => {
      ks.sendKey("enter");
    }, 2000);
  }, 3000);
}, 3600000 * h + 60000 * m + 1000 * s);
