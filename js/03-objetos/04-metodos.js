// let triangulo = {
//   base: 12,
//   altura: 15,
//   get area() {
//     return (this.base * this.altura) / 2;
//   },
//   set area(nuevaBase) {
//     this.base = nuevaBase;
//   },
// };

// triangulo.area = 100;

// document.write(`El area del triangulo es: ${triangulo.area}`);

let persona = {
  nombre: "Leonardo",
  apellido: "Rozza",
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set nombreCompleto(nombre) {
    [this.nombre, this.apellido] = nombre.split(" ");
  },
};

//persona.nombreCompleto = "Marisol Chaparro";

document.write(persona.nombreCompleto);
