const { odd, even } = require("./var");
// import { odd, even } from "./var.js";

function checkOddOrEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
//export default checkOddOrEven;
