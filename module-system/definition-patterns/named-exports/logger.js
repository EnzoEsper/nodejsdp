// el objecto que es exportado resulta en un container o namespace 
// para un conjunto de funcionalidades relacionadas

exports.info = (message) => {
  console.log(`info: ${message}`);
};

exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
}
