function saludar(nombre) {
  //Recibe un parametro.
  document.write(`Hola! como estas ${nombre}?`);
}

// let nombre = prompt("Ingresa tu nombre: ");

// saludar(nombre); //Enviamos argumento.

//Funciones con varios parametros.

function suma(num1, num2) {
  document.write(num1 + num2);
}

suma(12, 34);

const calculoComision = (ventas, antiguedad, zona) => {
  let comision = 0;

  if (ventas > 1000) comision = ventas * 0.15;
  if (antiguedad > 5) comision += 100;
  if (zona === "norte") comision += 50;
  if (zona === "sur") comision += 60;

  return comision;
};
