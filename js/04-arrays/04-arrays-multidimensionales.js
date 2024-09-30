let paises = [
  ["España", "Mexico"],
  ["Argentina", "Francia"],
  ["Paises Bajos", "Reino Unido"],
];

//Para acceder a los elementos del arreglo "multidimensional", podemos usar la notacion de corchetes.

console.log(paises[1][0]); //Para acceder a Argentina

//Tambien se pueden crear arrays multidimencionales con bucles para hacerlos de manera dinamica.

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    document.write(`${i} x ${j} = ${i * j} </br>`);
  }
  document.write("-----------------------", "</br>");
}
