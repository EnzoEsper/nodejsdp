// Usando el non-flowing mode para leer desde un readable stream, vinculando un listener al evento readable, que
// que seniala la disponibilidad de nuevos datos para leer.

process.stdin
  .on("readable", function() {
    var chunk;
    console.log("New data available");
    while ((chunk = process.stdin.read()) !== null) {
      console.log(
        "Chunk read: (" + chunk.length + ') "' + chunk.toString() + '"'
      );
    }
  })
  .on("end", function() {
    process.stdout.write("End of stream");
  });
