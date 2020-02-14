// Si bien ambos modulos son inicializados en el momento en el que son requeridos aca en el main, el moduleA
// estara incompleto cuando se cargue desde moduleB.js. En particular, su estado sera el que alcanzo cuando 
// hizo el require de module moduleB.js.
const moduleA = require("./moduleA");
const moduleB = require("./moduleB");

console.log(moduleA);
console.log(moduleB);

// NOTA: Si se invierte el orden de los require, se puede observar que en ese caso es el modulo moduleA.js 
// el que recibe una version incompleta del moduleB.js. Esto puede volverse un poco confuso si se pierde
// control acerca de que modulos se cargan primero (lo que podria suceder, sobre todo si el proyecto se
// torna lo suficientemente grande).
