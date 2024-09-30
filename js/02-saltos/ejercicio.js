let numero1 = prompt("Ingrese el primer numero: ");
let numero2 = prompt("Ingrese el segundo numero: ");

const esPrimo = (numero) => {
  if (numero < 2) return false;
  for (let i = 2; i < Math.sqrt(numero); i++) {
    if (i % 2 === 0) {
      return false;
    }
    return true;
  }
};

const numeroPrimos = (numeroInicio, numeroFin) => {
  let primos = [];

  for (let num = numeroInicio; num <= numeroFin && primos.length < 3; num++) {
    if (esPrimo(num)) {
      primos.push(num);
    }
  }
};
