const Roee = require("./roee");

// ticker que emite un tick cada un segundo y mantiene el conteo de todos los ticks emitidos.
// se instancia un nuevo roee (read only event emmiter) se pasa la lógica de emisión de eventos 
// dentro de la función ejecutora.
const ticker = new Roee((emit) => {
  let tickCount = 0;
  setInterval(() => emit('tick', tickCount++), 1000);
});

module.exports = ticker;