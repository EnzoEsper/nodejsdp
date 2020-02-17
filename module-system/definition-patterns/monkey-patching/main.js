// Estas tecnicas suelen tener efectos secundarios peligrosos, ya que afectan el estado de entidades
// fuera de su scope, lo que causa consecuencias impredecibles y genera repercusiones en la aplicacion entera.

require("./patcher");
const logger = require("./logger");

logger("this is an informational message");

logger.customMessage();