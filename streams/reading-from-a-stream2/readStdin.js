// usando el flowing mode para leer desde un stream, vinculando un listener al evento data (esto es lo que
// va a hacer un switch y hacer que el stream entre en el flowing mode). En este caso los datos no son 
// extraidos usando read, sino que son empujados al listener a medida que llegan.

process.stdin
  .on("data", function(chunk) {
    console.log("New data available");
    console.log(
      "Chunk read: (" + chunk.length + ')" ' + chunk.toString() + '"'
    );
  })
  .on("end", function() {
    process.stdout.write("End of stream");
  });
