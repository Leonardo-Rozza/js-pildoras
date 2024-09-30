// Hay varias formas de agregar un elemento a un array.

let paises = ["Argentina", "Venezuela"];

// Con corchetes

paises[2] = "Francia";

// Con el método push, que agrega el elemento al final del arreglo.

paises.push("Alemania");

// El método unshift hace lo mismo pero los agrega al principio.

paises.unshift("Bolivia");

// Ambos métodos aceptan varios parametros. Por lo que podemos agregar varios elementos a la vez.

paises.push("Nigeria", "Rusia", "EE.UU");

// Tambien se pueden eliminar elementos, empezando del final(pop) o desde el inicio(shift).
paises.pop();
paises.shift();

console.log(paises);
