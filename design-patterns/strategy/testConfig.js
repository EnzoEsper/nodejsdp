const Config = require("./config");
const strategies = require("./strategies");

const jsonConfig = new Config(strategies.json);
jsonConfig.read("samples/conf.json");
jsonConfig.set("book.nodejs", "strategy pattern");
jsonConfig.save("samples/conf_mod.json");

const iniConfig = new Config(strategies.ini);
iniConfig.read("samples/conf.ini");
iniConfig.set("book.nodejs", "strategy pattern");
iniConfig.save("samples/conf_mod.ini");