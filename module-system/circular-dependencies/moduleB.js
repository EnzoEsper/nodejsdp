exports.loaded = false;
const moduleA = require("./moduleA");

module.exports = {
  moduleAWasLoaded: moduleA.loaded,
  loaded: true
}