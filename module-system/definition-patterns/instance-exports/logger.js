// Se puede aprovechar el mecanismo de almacenamiento en caché de require () para definir fácilmente 
// instancias con un estado creado a partir de un constructor o una fábrica, que se puede compartir 
// entre diferentes modulos.

function Logger(name) {
  this.count = 0;
  this.name = name;
};

Logger.prototype.log = function(message) {
  this.count++;
  console.log(`[${this.name}] ${message}`);
};

module.exports = new Logger("DEFAULT");

// una variacion de este patron podria ser exportar el constructor ademas de la instancia en si. Esto le
// permite al usario crear instancias del mismo objecto, o incluso extenderlas si fuera necesario. Para esto
// solo se debe asignar una nueva propiedad a la instancia:
module.exports.Logger = Logger;
// Desde el punto de vista de la usabilidad, esto es parecido a usar una funcion exportada como namespace:
// El modulo exporta una instancia por defecto del objeto (la pieza de funcionalidad que queremos usar 
// la mayor parte del tiempo), mientras que funcionalidades mas avanzadas o secundarias (como la habilidad
// de crear nuevas instancias o extender el objeto) estan disponibles a traves de propiedades menos expuestas