exports.loaded = false;
const moduleB = require("./moduleB");

module.exports = {
  moduleBWasLoaded: moduleB.loaded,
  loaded: true
}