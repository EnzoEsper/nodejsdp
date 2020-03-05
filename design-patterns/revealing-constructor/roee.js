const EventEmmiter = require(`events`);

// Roee acepta una funcion como argumento del constructor, la cual suele ser llamada "executor function".
// Es llamada por la implementacion interna del constructor del emmiter (roee) y se usa para permitir que el
// codigo de construccion manipule solo una parte limitada del estado interno del emmiter en construccion
module.exports = class Roee extends EventEmmiter {
  constructor(executor) {
    super();
    // se guarda un backup de la funcion emit
    const emit = this.emit.bind(this);
    // y se la remueve (no sera posible llamarla desde otras partes del codigo)
    this.emit = undefined;
    // mecanismo para permitir que se use emit solo dentro de la "executor function"
    executor(emit);
  }
}

// NOTAS
// para el caso del constructor de una Promise por ej. la "executor function" sirve como mecanismo para 
// exponer las funciones resolve y reject, y que puedan ser invocadas para cambiar el estado interno del objeto.
// ventajas: solo el codigo constructor tiene acceso a resolve y reject, y una vez que un objeto del tipo
// Promise es construido puede ser pasado de forma segura sin que otra parte del codigo pueda acceder a estas
// funciones y modificar su estado interno.