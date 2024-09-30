// for (let contador = 0; contador < 10; contador++) {
//   console.log("Iniciando el bucle for: ", contador);
//   document.write("Vuelta del bucle: " + contador + "</br>");
// }

// for (let i = 1, x = 2; i <= 10; i++, x++) {
//   document.write(`${i} es menor que ${x} </br>`);
// }

// let inicio = prompt("Ingrese el incio del bucle");
// let final = prompt("Ingrese el final del bucle");

// for (inicio; inicio < final; inicio++) {
//   document.write(
//     `Iniciaste el bucle en ${inicio} y lo finalizaste en ${final}, por ende el bucle va a dar ${
//       final - inicio
//     } vueltas </br>s`
//   );
// }

//Ejercicio de realizar un factorial.

let numero = parseInt(prompt("Ingrese un numero"));

if (numero == 1 || numero < 0) {
  alert("1");
}

let resultado = 0;

for (let i = 1; i <= numero; i++) {
  resultado += numero * numero - 1;
}

document.write(`El resultado es ${resultado}`);
