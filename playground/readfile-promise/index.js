const fs = require("fs");
const resolve = require("path").resolve;

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) return reject(error);
      return resolve(data); 
    });
  });
}

/* readFile("./archivo1.txt")
  .then(data => console.log(data))
  .catch(error => console.log(error)); */

// aplicando promise chaining para leer el segundo archivo al que hace referencia el primero.
// como el segundo then recibe el path al segundo archivo y readFile solo recibe un argumento
// (el path) entonces se puede pasar directamente readFile y la promesa se encarga de ejecutarlo.
/* readFile("./archivo1.txt")
  .then(readFile)
  .then(data => console.log(data))
  .catch(error => console.log(error)); */

// se leen los archivos 1 y 3 paralelamente para obtener las rutas a las que hacen referencia
// para luego leer nuevamente de forma paralela el contenido de los archivos a los que hacian referencia 
// las rutas.
/* Promise.all([readFile('./archivo1.txt'), readFile('./archivo3.txt')])
  .then(data => data.map(path => resolve(path)))
  .then(data => Promise.all(data.map(readFile)))
  .then(finalData => console.log(finalData))
  .catch(error => console.error(error)); */

// en este caso se van a obtener los datos de la promesa que se resuelva primero del arreglo
Promise.race([readFile('./archivo1.txt'), readFile('./archivo3.txt')])
  .then(resolve)
  .then(readFile)
  .then(data => console.log(data))
  .catch(error => console.log(error));

