// Un modulo podria tambien no exportar nada y ser usado para modificar el scope global y cualquer objeto
// dentro de el, incluyendo objetos en la cache. ESTO EN GENERAL ES CONSIDERADO UNA MALA PRACTICA, llamada
// monkey patching: practica de modificar los objetos existentes en tiempo de ejecucion para cambiar o
// extender su comportamiento o para aplicar "parches" temporales.

require("./logger").customMessage = () => {
  console.log("This is a new functionality added by the patcher file");
};

