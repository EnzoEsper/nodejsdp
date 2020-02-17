const logger2 = require("./logger");
require("./main");

logger2.log("This is a general message from main2");
console.log(`count from main2.js: ${logger2.count}`);
// en este caso el count retorna 2 debido a que hace referencia a la misma instancia del objeto.