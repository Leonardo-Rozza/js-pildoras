let paises = ["Argentina", "Venezuela", "EE.UU", "España", "Rusia"];

// Bucle for Of

//let lista = "";

for (let [indice, pais] of paises.entries()) {
  //lista += pais + ", ";
  document.writeln(`${indice} ${pais} </br>`);
}

// Bucle forEach
paises.forEach((pais, indice) => {
  document.writeln(`${indice} ${pais} </br>`);
});
