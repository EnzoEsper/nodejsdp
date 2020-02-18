const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

// El EventEmitter creado por la siguiente funcion va a producir tres eventos: 1)fileread: este evento ocurre
// cuando un archivo es leido 2)found: cuando se encuentra un match en el archivo segun la expresion regular
// 3)error: cuando ocurre un error al leer el archivo
function findPattern(files, regex) {
  const emitter = new EventEmitter();
  files.forEach(function(file) {
    fs.readFile(file, "utf-8", (err, content) => {
      if(err)
        return emitter.emit("error", err)

      emitter.emit("fileread", file);
      let match;
      if (match = content.match(regex)) {
        match.forEach(elem => emitter.emit("found", file, elem));
      };
    });
  });
  return emitter;
};

findPattern(["fileA.txt", "fileB.json"], /hello \w+/g)
  .on("fileread", file => console.log(`${file} was read`))
  .on("found", (file, match) => console.log(`Matched ${match} in file ${file}`))
  .on("error", err => console.log("Error emitted: " + err.message))
