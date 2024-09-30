let numero = (Math.random() * 100);

let numeroPrompt = prompt("Ingerese un número: ");

let intentos = 0;

while (numeroPrompt !== numero) {
  intentos++;
  if (numeroPrompt > numero) alert("El numero es menor");

  if (numeroPrompt < numero) alert("El número es mayor");

  numeroPrompt = prompt("Ingerese un número: ");
}

document.write(
  "Felicitaciones adivinaste! el numero era  " +
    numero +
    ", solo te tomó " +
    intentos +
    " intentos"
);
