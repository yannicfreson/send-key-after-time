// THIS WILL USE YOUR KEYBOARD TO TYPE WHATEVER YOU
// INPUT AS MESSAGE AT THE THE TIME YOU SET UNLESS
// YOU CANCEL THE SCRIPT EXECUTION, USE AT YOUR OWN RISK

const ks = require("node-key-sender");
const h = 0; // hours until
const m = 0; // minutes until
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
