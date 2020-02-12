// function that mimics a subset of the functionality of the require() function of Node

function loadModule(filename, module, require) {
  const wrappedSrc = `(function(module, exports, require){
    ${fs.readFileSync(filename, "utf-8")}
  })(module, module.exports, require)`;
  eval(wrappedSrc);
}

const require = (moduleName) => {
  console.log(`Require invoked for module ${moduleName}`);
  // [1]
  const id = require.resolve(moduleName);
  // [2]
  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  //[3] module metadata
  const module = {
    exports: {},
    id: id
  };

  // [4] update the cache
  require.cache[id] = module;

  //[5] load the module
  loadModule(id, module, require);

  // [6] return exported variables
  return module.exports;
};

require.cache = {};
require.resolve = (moduleName) => {
  // resolve a full module id from the moduleName
};


// [1] A module name is accepted as input, and the very first thing that we do is
// resolve the full path of the module, which we call id. This task is delegated to
// require.resolve(), which implements a specific resolving algorithm
// [2] If the module has already been loaded in the past, it should be available in the
// cache. In this case, we just return it immediately
// [3] If the module was not loaded yet, we set up the environment for the first load.
// In particular, we create a module object that contains an exports property
// initialized with an empty object literal. This property will be used by the code of
// the module to export any public API. 
// [4] The module object is cached. 
// [5] The module source code is read from its file and the code is evaluated, as we
// have seen before. We provide the module with the module object that we just
// created, and a reference to the require() function. The module exports its
// public API by manipulating or replacing the module.exports object. 
// [6] Finally, the content of module.exports, which represents the public API of the
// module, is returned to the caller.