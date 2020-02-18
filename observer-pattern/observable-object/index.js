// Muchas veces crear un objeto observable directamente desde la clase EventEmitter no es suficiente
// y si se quiere proporcionar funcionalidad adicional que vaya mas alla de la produccion de nuevos 
// eventos se torna impractico. Gralmente es mas comun que se tenga la necesidad de hacer un objeto
// generico que sea observable, y esto es posible extendidendo la clase EventEmitter.

const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

class FindPattern extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    console.log(`this inside addFile(): ${JSON.stringify(this, undefined, 2)}`);
    return this;
  }

  find() {
    this.files.forEach(file => {
      fs.readFile(file, "utf-8", (err, content) => {
        if(err) {
          return this.emit("error", err)
        }

        this.emit("fileread", file);

        let match = null;
        if (match = content.match(this.regex)) {
          match.forEach(elem => this.emit("found", file, elem))
        }
      });
    });
    console.log(`this inside find(): ${JSON.stringify(this, undefined, 2)}`);
    return this;
  }
};

const findPatternObject =  new FindPattern(/hello \w+/g);
findPatternObject
  .addFile("fileA.txt")
  .addFile("fileB.json")
  .find()
  .on("found", (file,match) => console.log(`Matched ${match} in file ${file}`))
  .on("error", err => console.log(`Error emitted ${err.message}`))