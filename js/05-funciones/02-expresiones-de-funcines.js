//Con este tipo de funciones, tenemos que declarar la misma y luego usarlas. Al contrario de lo que ocurre con las funciones normales, que por mas que las declares despues de llamarlas se pueden usar sin problema. Porque el interprete de JS las lee primero y las 'eleva' al principio del archivo.

//A eso se le conoce como una expresion de funcion.
//Donde lo que devuelve la funcion lo asignamos a una constante. y luego para llamarla hay que llamarla por su 'nuevo' nombre.
const ladoFigura1 = function areaCuadrado(lado) {
  return lado * lado;
};

//Tambien se puede ominir el nombre de la funcion convirtiendola en una funcion anonima.
const ladoFigura2 = function (lado) {
  return lado * lado;
};

//Con las funciones flecha, se puede simplificar mucho más.
const ladoFigura3 = (lado) => lado * lado; //Como simplemente retorna un valor, podemos presindir de la palabra 'return'

// document.write("El area del cuadrado es de: " + ladoFigura3(7));

// Factorial de un numero con funciones, aplicando la recursividad.
const factorial = (numero) => {
  if (numero <= 1) return 1;

  return numero * factorial(numero - 1);
};

document.write(factorial(5));
