let numeros = [12, 34, 23, 43, 64];
let sumaNumeros = 0;
numeros.forEach((numero, indice, elementoArr) => {
  sumaNumeros += numero;
  console.log(elementoArr);
});

//document.writeln("La suma de los numeros del arreglo es de: " + sumaNumeros);

// Método MAP
let altura = [160, 190, 175, 156, 174, 200];

document.writeln(
  altura.map((alturaPersona) => "Peso ideal: " + (alturaPersona - 110))
);

//Metod Filter
let edades = [25, 44, 19, 10, 14, 16, 41, 99];

console.log(
  "Las edades aptas para trabajar son: " +
    edades.filter((edad) => edad >= 18 && edad < 65)
);

// Método findIndex()
// Método find()
// Método Some()
// Método every()
