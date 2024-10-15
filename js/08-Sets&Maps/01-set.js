//Son estructuras similares a los arrays.
// No aceptan valores duplicados
// No tienen un orden ni estan indexados.
// Son mas eficientes que los arrays.

const nombres = new Set();

nombres.add("Leonardo");
nombres.add("Leo");
nombres.add("Mimi");
nombres.add("Lucy");
nombres.add("Mari");
nombres.add("Mari");

//Permite obtener la cantidad de elementos
console.log(nombres.size);

//Metodo util para probar si un elemento se encuentra dentro o no de un set
console.log(nombres.has("Leo"));

//Delete para eliminar un elemento
nombres.delete("Mari");

//Elimina todos los elementos/contenidos del set.
// nombres.clear();

//Para recorrerlos usamos forEach
nombres.forEach((nombre) => {
  console.log(nombre);
});

let nombress = ["Leo", "Leo", "Antonio", "Juan", "Sandra", "Pepe", "Antonio"];

for (let i = 0; i < nombress.length; i++) {
  for (let j = i + 1; j < nombress.length; j++) {
    if (nombress[i] === nombress[j]) {
      nombress.splice(j, 1); // Elimina el elemento duplicado
      j--; // Ajustar el índice tras eliminar un elemento
    }
  }
}

console.log(nombress);
