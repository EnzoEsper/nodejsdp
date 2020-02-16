// se le reasigna a toda la variable module.exports una funcion
// su principal ventaja: expone una sola funcionalidad, provee un claro punto de entrada al modulo
// haciendolo mas facil de entender y usar

module.exports = (message) => {
  console.log(`info: ${message}`);
}

// una posible extension de este patron es usar la funcion exportada como un namespace para otras
// APIS publicas. Esto resulta en una poderosa combinacion, ya que sigue proporcionando al modulo 
// la claridad de un solo punto de entrada y tambien permite exponer otras funcionalidades que 
// pudieran tener casos de uso secundarios o mas avanzados.
module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
}

// NOTA: EXPONER LA PRINCIPAL FUNCIONALIDAD DE UN MODULO EXPORTANDO UNA SOLA FUNCION. USAR LA FUNCION
// EXPORTADA COMO UN NAMESPACE PARA EXPORTAR CUALQUIER OTRA FUNCIONALIDAD AUXILIAR.