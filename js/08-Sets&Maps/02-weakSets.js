//Es lo mismo que los sets, pero estos mismos son una coleccion de objetos.
//No son Iterables. No tienen propiedad size.
//Sus objetos que no se utilizan, se eliminan automaticamente.
//Solo tienen metodos add/delete/has.

const nombres = new WeakSet();

const empleado1 = {
  nombre: "Leo",
  salario: 4000,
  antiguedad: 5,
}
const empleado2 = {
  nombre: "Mari",
  salario: 5000,
  antiguedad: 15,
}
const empleado3 = {
  nombre: "Lucy",
  salario: 2500,
  antiguedad: 12,
}

nombres.add(empleado1);
nombres.add(empleado2);
nombres.add(empleado3);


console.log(nombres.has(empleado1));