// Cada vez que creamos un Symbol, nos crea un identificador unico.
// Encapsulan propiedades de objetos. No son mutables.


const NOMBRE = Symbol();
const LEER = Symbol();

const persona = {
  [NOMBRE]:"Leonardo",
  apellido: "Rozza",
  edad: 199
}
persona[LEER]  = () => console.log("Estoy leyendo")

console.log(persona)

persona[LEER]()
