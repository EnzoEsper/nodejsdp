const ticker = require("./ticker");

ticker.on("tick", (tickCount) => console.log(`${tickCount} TICK`));
// ticker.emit('something', {}); 
// ESTO FALLA (TypeError: ticker.emit is not a function) 
// ya que limitamos a que el emmiter sea read only y solo se pueda el metodo on para agregar listeners
// utilizando el patron revealing constructor