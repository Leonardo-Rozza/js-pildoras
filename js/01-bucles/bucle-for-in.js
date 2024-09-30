let Coche = {
  color: "azul",
  ruedas: 4,
  peso: 1200,
  potencia: 220,
};

// Con un bucle FOR OF

/*
let claveValor = "";

for (let [clave, valor] of Object.entries(Coche)) {
  claveValor += clave + " : " + valor;
  claveValor += "</br>";
}

document.write(claveValor);

*/

//Con un bucle FOR IN

for (let propiedad in Coche) {
  document.write(propiedad + " : " + Coche[propiedad] + "</br>");
}
