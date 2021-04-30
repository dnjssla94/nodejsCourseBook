const url = require("url");

const { URL } = url;
const myURL = new URL(
  "https://github.com/dnjssla94/nodejsCourseBook/blob/main/chapter2/2.1.6_class.js"
);

console.log("new URL()::", myURL);
console.log("url.format(myURL):", url.format(myURL));
