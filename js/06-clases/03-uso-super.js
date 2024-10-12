class Animal {
  constructor(eyes, legs) {
    this.eyes = eyes;
    this.legs = legs;
  }

  eat(food) {
    return `The animal eating ${food}`;
  }

  characteristics() {
    return `The introduced animal has ${this.eyes} eyes and ${this.legs} legs`;
  }
}

class Perro extends Animal {
  constructor(eyes, legs, hocico) {
    // Mandamos a llamar le método super de la clase padre, pasandole los argumentos.
    super(eyes, legs);

    this.hocico = hocico;
  }

  eat(food) {
    //Cuando utilizamos el super fuera del constructor, tenemos que llamar a las propiedades con el .
    return super.eat(food);
  }

  characteristics() {
    return `${super.characteristics()} and ${this.hocico} hocico`;
  }
}

let lucy = new Perro(2, 4, 1);

document.write(lucy.characteristics());
