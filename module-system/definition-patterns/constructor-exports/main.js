const Logger = require("./logger");

// creando una nueva instancia sin la instruccion new a modo de prueba
const dbLogger = Logger("DB");
dbLogger.info("This is an informational message");

const accessLogger = new Logger("ACCESS");
accessLogger.verbose("This is a verbose message");