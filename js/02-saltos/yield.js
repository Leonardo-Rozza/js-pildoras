function* rango(desde, hasta) {
  for (let i = desde; i < hasta; i++) {
    yield i;
  }
}

let numero = rango(5, 10);

document.write(numero.next().value + "</br>");
document.write(numero.next().value);
