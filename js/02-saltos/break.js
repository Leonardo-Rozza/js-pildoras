// let email = prompt("Ingrese el email: ");

// let arroba = false;

// for (let i = 0; i < email.length; i++) {
//   if (email[i] === "@") {
//     arroba = true;
//   }
//   if (arroba) {
//     document.write("Email Correcto");
//     break;
//   } else {
//     document.write("Email Incorrecto");
//   }
// }

//Ingresar paises.

// let paises = [];
// let pais = "";
// do {
//   pais = prompt("Ingrese paises: ");
//   if (pais !== null) paises.push(pais);
// } while (pais !== null);

// if (paises.includes("españa")) {
//   document.write("Se ha encontrado España!");
// } else {
//   document.write("En el array no está españa!");
// }

let ciudades = [
  ["Buenos Aires", "Cordoba", "Mendoza"],
  ["Madrid", "Barcelona", "Sevilla"],
  ["Cali", "Medellin", "bogotá"],
];

buclePrincipal: for (let i = 0; i < ciudades.length; i++) {
  for (let j = 0; ciudades[i].length; j++) {
    document.write(ciudades[i][j]);
    if (ciudades[i][j] === "Sevilla") {
      document.write("Se encontro la ciudad de Sevilla!");
      break buclePrincipal;
    }
  }
}
