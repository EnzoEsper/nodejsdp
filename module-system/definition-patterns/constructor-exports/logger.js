// Es una especializacion del modulo que exporta una funcion. La diferencia es que con este patron se le
// permite al usuario crear nuevas instancias usando el constructor, y tambien se le brinda la posibilidad
// de extender su prototipo y crear nuevas clases. 

// Este patron sigue brindando un unico punto de entrada para el modulo, pero comparado al patron substack,
// expone mas el interior del modulo; sin embargo, brinda mucho mas poder cuando se trata de extender su 
// funcionalidad.
function Logger(name){
  // Se puede aplicar una proteccion contra invocaciones que no usen la instruccion new, como variacion
  // del patron. Este truco permite usar el modulo como una "fabrica".
  /* if (!this instanceof Logger) {
    return new Logger(name);
  } */

  // Este enfoque es mucho mas claro que el de arriba, usando la sintaxis new.target provista a partir de ES2015
  if (!new.target) {
    return new Logger(name);
  }

  this.name = name;
};

Logger.prototype.log = function(message){
  console.log(`[${this.name}] ${message}`);
};

Logger.prototype.info = function(message) {
  this.log(`info: ${message}`);
};

Logger.prototype.verbose = function(message) {
  this.log(`verbose: ${message}`);
};

// De igual forma se puede exportar una clase (ES2015) -> Metodo preferible!
/* class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[$this.name] ${message}`);
  }

  info(message) {
    this.log(`info: ${this.message}`);
  }

  verbose(message) {
    this.log(`verbose: ${this.message}`);
  }
} */

module.exports = Logger;