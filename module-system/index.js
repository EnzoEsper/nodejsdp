
// funcion que carga el contenido de un modulo, lo wrapea en un scope privado y lo evalua.
function loadModule(filename, module, require) {
  const wrappedSrc = `(function(module, exports, require){
    ${fs.readFileSync(filename, "utf-8")}
  })(module, module.exports, require)`;
  eval(wrappedSrc);
}

// funcion que imitia un subconjunto de funcionalidades de la funcion original require() de Node.js
const require = (moduleName) => {
  console.log(`Require invoked for module ${moduleName}`);
  // [1] resuelve el full path del modulo, y se almacena en la constante id. 
  // require.resolve() implementa un algoritmo de resolucion especifico.
  const id = require.resolve(moduleName);
  // [2] si el modulo ya fue cargado en el pasado, deberia estar disponible en la cache. En ese caso
  // se lo retorna inmediatamente.
  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  //[3] metadatos del modulo: si el modulo aun no fue cargado, se arma el entorno para la primera carga.
  // la propiedad exports del objeto es la que va a ser usada por el codigo del modulo para exponer cualquier API publica.
  const module = {
    exports: {},
    id: id
  };

  // [4] actualizar la cache: el objeto module es cacheado.
  require.cache[id] = module;

  //[5] cargar el modulo: el codigo fuente del modulo es leido desde el archivo y el codigo es evaluado.
  loadModule(id, module, require);

  // [6] retornar variables exportadas: finalmente, el contenido de module.exports, que representa la 
  // API publica del modulo es retornado al caller.
  return module.exports;
};

require.cache = {};
require.resolve = (moduleName) => {
  // resolve a full module id from the moduleName
};
