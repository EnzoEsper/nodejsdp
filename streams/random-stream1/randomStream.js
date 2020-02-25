const stream = require("stream");
const util = require("util");
const chance = require("chance").Chance();

class RandomStream extends stream.Readable {
  constructor(options) {
    super();
    stream.Readable.call(this, options);
  }

  _read(size) {
    let chunk = chance.string();
    console.log(`Pushing chunk of size ${chunk.length}`);
    // empujan el string al bufer interno de lectura.
    this.push(chunk, "utf8");
    // termina el stream aleatoriamente, con una probabilidad del 5 por ciento, empujando nulo en el
    // búfer interno para indicar una situación de EOF o, en otras palabras, el final del flujo.
    if (chance.bool({likelihood: 5})) {
      this.push(null);
    };
  }
};

module.exports = RandomStream;

