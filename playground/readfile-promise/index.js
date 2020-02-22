const fs = require("fs");

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) return reject(error);
      return resolve(data); 
    });
  });
}

readFile("./archivo1.txt")
  .then(data => console.log(data))
  .catch(error => console.log(error));