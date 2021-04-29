const { odd, even } = require("./var");
const checkNumber = require("./func");

function checkStringLenth(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkStringLenth("Hello"));
console.log(checkNumber(13892));
