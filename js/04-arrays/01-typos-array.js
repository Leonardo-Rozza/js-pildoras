// Hay varias formas de crear un array en JS. Como literal.

let numeros = [1, 2, 3, 4, 5];

let datos = [true, 24.4, "Hola", { alto: 24, ancho: 56 }];

//Tambien se pueden crear arrays con valores que se pueden ir modificando en tiempo de ejecucion.

let valor = 200;
let masNumeros = [valor, valor + 244, valor - 10];

for (let i = 0; i < datos.length; i++) {
  // document.write(datos[i], "</br>");
}

//Podemos crear copias de arrays muy simples con el operador spreed.

let variosArr = [...datos, ...masNumeros, ...numeros]; //Unificamos el valor de 3 arrays distintos en uno solo.

// document.write(variosArr, "</br>");

//---------------------------
let nombre = [..."Leonardo Rozza"];

for (let i = 0; i < nombre.length; i++) {
  if (nombre[i] === " ") continue;
  document.write(`Nombre de ${i} = ${nombre[i]}  </br>`);
}

// Creamos arrays con el constructor.

let array = new Array();
let array2 = new Array(10); //Especifica la cantidad de elementos.
let array3 = new Array("España", "Colombia", "México"); //Especifica la cantidad de elementos.

console.log(array3);
