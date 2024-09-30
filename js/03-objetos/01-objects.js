// Formas de Crear

let coche = {
  color: "Blue",
  peso: 400,
};

let obj = new Object();

let my_objeto = Object.create({
  color: "Verde",
  peso: 4000,
});

// Formas de acceder a un objeto.

// Mediante la nomenclatura del punto

console.log(coche.color);

//Tambien podemos editar el valor de la propiedad

coche.color = "Naranja";
console.log(coche.color);

// Otra forma de acceder es atravez de corchetes []

console.log(coche["color"]);

// De la misma forma podemos modificar el valor de la propiedad con los corchetes.
coche["peso"] = 10000;

console.log(coche["peso"]);

// JS tambien permite crear propiedades en tiempo de ejecucion
coche.cantidadPasajeros = 9;

console.log(coche.cantidadPasajeros);

// Tambien podemos agregarlas dinamicamente a traves de un bucle for, o como quieras.

for (let i = 0; i < 5; i++) {
  coche[`cilindrada${i}`] = 2000 + 100 * i;
}

console.log(coche);
