let p1 = {
  nombre: "Leo",
  edad: 28,
};

let coche = {
  color: "Rojo",
  potencia: 450,
  propietario: p1,
  toString: function () {
    return `El coche tiene un color ${this.color} y su potencia es de ${this.potencia}`;
  },
};

coche["pasajeros"] = 5;

let furgoneta = {
  carga: 4500,
};

// Forma de copiar las propiedades de un objeto a otro.

// for (let clave of Object.keys(coche)) {
//   furgoneta[clave] = coche[clave];
// }

// console.log(furgoneta);

// Tambien se a partir del ES6 se puede unar el metodo assign, que lo simplifica.

// Object.assign(furgoneta, coche);
// console.log(furgoneta);

// Serializar, es convertir un objeto a un String.

let cocheSerializado = JSON.stringify(coche);

console.log(cocheSerializado);

let cocheDeSerializado = JSON.parse(cocheSerializado);

console.log(cocheDeSerializado);

// Metodo toString

document.write(coche.toString());
