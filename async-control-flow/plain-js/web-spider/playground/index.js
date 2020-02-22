const parseUrl = require("url").parse;
const slug = require("slug");


let parsedUrl = parseUrl(`https://www.example.com`);
/* console.log(parseUrl(`https://u:p@www.example.com:777/a/b?c=d&e=f#g`)); */

console.log(slug('i ♥'));

console.log(parsedUrl.path);
let urlPath = parsedUrl.path.split("/")
  .filter(comp => comp !== "");
console.log(urlPath);