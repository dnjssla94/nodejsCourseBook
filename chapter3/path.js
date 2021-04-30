const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter():", path.delimiter);
console.log("-[------------------");
console.log("path.dirname(string):", path.dirname(string));
console.log("path.extname(string):", path.extname(string));
console.log("path.basename(string):", path.basename(string));
console.log(
  "path.basename-extname:",
  path.basename(string, path.extname(string))
);
console.log("path.parse(string):", path.parse(string));
