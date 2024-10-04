let numeros = [12, 34, 23, 43, 64];
let sumaNumeros = 0;
numeros.forEach((numero, indice, elementoArr) => {
  sumaNumeros += numero;
  console.log(elementoArr);
});

//document.writeln("La suma de los numeros del arreglo es de: " + sumaNumeros);

// Método MAP
let altura = [160, 190, 175, 156, 174, 200];

console.log(
  altura.map((alturaPersona) => "Peso ideal: " + (alturaPersona - 110))
);

//Metod Filter
let edades = [25, 44, 19, 10, 14, 16, 41, 99];

console.log(
  "Las edades aptas para trabajar son: " +
    edades.filter((edad) => edad >= 18 && edad < 65)
);

// Método findIndex() Este método nos devuelve el indice de donde se encuentra el elemento que estamos buscando.
// Si hay un elemento duplicado, nos devolverá siempre el primero que encuentre.

let nombres = ["Leo", "Marisol", "Lucy", "Mimi", "Leo"];
let edadess = [14, 24, 45, 67, 98, 76, 39, 135, 61];

let findIndex = nombres.findIndex((index) => index === "Leo");
// document.write(findIndex);

// Método find() No devuelve en indice, sino que devuelve el elemento en si.
let find = edadess.find((elemento) => elemento % 2 === 0);
let findLetras = nombres.find(
  (elemento) => elemento[elemento.length - 1] === "y"
);
//document.write(findLetras);

// Método every() Devolverá true si todos los elementos del complen con la condicion dada. Es como el condicional and &&
let edadesMenoresQueCien = edadess.every((edades) => edades < 100);
document.writeln("every: " + edadesMenoresQueCien + "</br>");

// Método Some() Devolverá true si alguno de todos es true, es como el condicional or ||.
let edadesSome = edadess.some((edades) => edades > 100);
document.write("some: " + edadesSome);
