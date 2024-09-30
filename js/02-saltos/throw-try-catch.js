function facotial(numero) {
  try {
    if (numero < 0) throw new Error("Ingrese un número poitivo!");
  } catch (e) {
    document.write(e);
  }
  let factorialNumero;
  for (factorialNumero = 1; numero > 1; numero--) {
    factorialNumero *= numero;
  }
  return factorialNumero;
}

let numero = parseInt(prompt("Ingrese un numero: "));

document.write(`El factorial de ${numero} es ${facotial(numero)}`);
