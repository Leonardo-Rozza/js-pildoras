//Son estructuras formadas por clave/valor, cada clave tiene su valor asociado.Cualquiera de las mismas pueden tener tipos diferentes de datos. Son más rapidos y eficientes que los objetos.


const empleado = new Map();

//El método set, sirve para agregar elementos al map.
empleado.set("nombre", "Leonardo");
empleado.set("salario", 4000);
empleado.set("comision", 1000);
empleado.set("apellido", "Rozza");


//El metodo get, sirve para obtener el valor asociado a una clave.
console.log(empleado.get("nombre"));


//El metodo delete, sirve para eliminar un elemento del map.
empleado.delete("salario");
console.log(empleado);

//El metodo has, sirve para saber si un elemento se encuentra dentro del map.
console.log(empleado.has("salario"))


//El metodo clear lo limpia.
// empleado.clear();
// console.log(empleado)

// Podemos crear un map a partir de un objeto, u otro map.
const empleado1 = new Map(empleado);


//Podemos recorrerlos con un forEach.
// empleado1.forEach((clave, valor) => {
//   document.write(`${clave}: ${valor}<br>`);
// })

//O podemos recorrerlos con el metodo entries(), que nos devuelve un objeto que luego podemos iterar.

console.log(empleado.entries())


for (let [clave, valor] of empleado.entries()) {
  document.write(`${clave}: ${valor}<br>`);
}
