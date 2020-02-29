function Profiler(label) {
  this.label = label;
  this.lastTime = null
}

Profiler.prototype.start = function() {
  // usando el timer por defecto para guarduar el tiempo actual cuando start() se invoca
  this.lastTime = process.hrtime();
}

Profiler.prototype.end = function() {
  // calculando el tiempo transcurrido desde que fue invocado start(), cuando end() se invoca
  var diff = process.hrtime(this.lastTime);

  console.log(`Timer ${this.label} took ${diff[0]} seconds and ${diff[1]} nanoseconds`);
}

// dependiendo si la app corre en prod o desarrollo, se retorna un objecto Profiler completamente funcional
// o alternativamente, un objeto mock con la misma interface, pero con metodos vacios
module.exports = function(label) {
  if (process.env.NODE_ENV === 'development') {
    return new Profiler(label);
  } else if (process.env.NODE_ENV === 'production') {
    return {
      start: function() {},
      end: function() {}
    }
  } else {
    throw new Error(`Must set NODE_ENV`);
  }
}

// El patron factory creado, abstrae la creacion del objeto Profiler de su implementacion. Gracias al 
// tipado dinamico de js se puede retornar un objeto instanciado con el operador new, en una circunstancia;
// y un simple objeto literal en la otra (duck typing)