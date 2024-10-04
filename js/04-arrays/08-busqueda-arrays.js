let nombres = ["Leo", "Marisol", "Mimi", "Leo", "Lucy", "Leonardo", "Leo"];

// El método indexOF nos muestra en que indice se encuentra el elemento que buscamos.
// Si no encuentra el elemento el metodo indexOf retorna -1.
// Para valores duplicados siempre devuelve el primero que encuentre.
// Con su segundo argumento podemos indicar desde que indice queremos que empieze a buscar.

// console.log(nombres.indexOf("Leo")); //Primer elemento
// console.log(nombres.lastIndexOf("Leo")); //Ultimo elemento.
// console.log(nombres.indexOf("Leo", 1)); //Que empieze a buscar desde la posicion 1.

const encuentraTodos = (array, elemBuscar) => {
  const resultados = [];
  let index = 0;
  while (index < array.length) {
    index = array.indexOf(elemBuscar, index);
    if (index === -1) throw new Error("El elemento buscado no existe");
    resultados.push(index);
    index++;
  }

  return resultados;
};

document.writeln(encuentraTodos(nombres, "Leo"));

// El método includes() nos devuelve true o false si el elemento se encuentra o no en el array.
console.log(nombres.includes("Leo"));
