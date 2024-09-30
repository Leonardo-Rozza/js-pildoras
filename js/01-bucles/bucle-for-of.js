let edades = [24, 13, 35, 56, 78, 32, 45];

// for (let i = 0; i < edades.length; i++) {
//   document.write(`${edades[i]} <br>`);
// }

// for (const edad of edades) {
//   document.write(`${edad} <br>`);
// }

let arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 8],
  [4, 5, 6, 24, 45, 56],
  [7, 8, 9],
];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     document.write(arr[i][j], "</br>");
//   }
// }

// for (const arreglos of arr) {
//   for (const arreglo of arreglos) {
//     document.write(arreglos[arreglo]);
//   }
// }

// let email = "leonardo155964@gmail.com";
// let arroba = 0;
// for (const mail of email) {
//   if (mail === "@") arroba++;
// }

// if (arroba === 1) document.write("El mail es correctisimo");

/*
Crea un programa que pida mediante ventana de prompt cinco números al usuario. Almacena los números introducidos por el usuario en un array utilizando un bucle for normal. A continuación, usando un for of que recorra el array, muestra un mensaje informando del resultado en el navegador de multiplicar cada uno de los números por 5.

Ejemplo:

Se pedirán al usuario cinco números, supongamos que introduce 2, 4, 10, 11 y 8

A continuación, se mostrará el siguiente mensaje en el navegador:

El resultado de multiplicar por 5 los números es:

2 x 5 = 10

4 x 5 = 20

10 x 5 = 50

11 x 5 = 55

8 x 5 =40.
*/

const arregloDeNums = [];
let numero = 0;

for (let i = 0; i < 5; i++) {
  numero = prompt("Introduce un numero: ");
  arregloDeNums.push(numero);
}

for (numero of arregloDeNums) {
  document.write(`${numero} x 5 = ${numero * 5}`, "</br>");
}
