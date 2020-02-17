const logger = require("./logger");

// debido a que el modulo es "cacheado", cualquier modulo que requiera al modulo logger va a recuperar
// la misma instancia del objeto y por lo tanto, compartiendo su estado. Este patron es algo asi como crear un
// patron singleton; sin embargo, NO garantiza la unicidad de la instancia a traves de toda la aplicacion. 

logger.log(`This is a general message from main`);
console.log(`count from main.js: ${logger.count}`);

// esta instancia del objeto no es la misma que la de arriba, ya que esta usando el constructor provisto
// adicionalmente desde el modulo logger.
const customLogger = new logger.Logger("CUSTOM");
customLogger.log("This is a genereal message form main but custom");
console.log(`count from main.js but custom: ${customLogger.count}`);
