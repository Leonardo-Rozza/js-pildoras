let empleado = {
  salario: 4000000,
  comision: 100000,
  toString: function () {
    return `El salario del empleado anual es de ${this.salario.toLocaleString()} y su comision es de ${this.comision.toLocaleString()}`;
  },
};

document.write(empleado.toString(), "</br>");

let fecha = new Date(2024, 9, 24);

document.write(fecha, "</br>");
document.write(fecha.toLocaleString(), "</br>");

// Spreed operator

let coche = {
  color: "Verde",
  potencia: 400,
};

let furgoneta = {
  capacidad: "Grande",
  autonomia: "Extendida",
};

let sub = {
  ...coche,
  ...furgoneta,
};

console.log(sub);
