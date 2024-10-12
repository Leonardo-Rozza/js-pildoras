class Vehiculo {
  constructor(modelo, marca, precio, km) {
    this._modelo = modelo;
    this._marca = marca;
    this._precio = precio;
    this._km = km;
  }

  get modelo() {
    return this._modelo;
  }
  get marca() {
    return this._marca;
  }
  get precio() {
    return this._precio;
  }
  get km() {
    return this._km;
  }

  set modelo(value) {
    this._modelo = value;
  }
  set marca(marca) {
    this._marca = marca;
  }
  set precio(precio) {
    this._precio = precio;
  }
  set km(km) {
    this._km = km;
  }

  marcaModelo() {
    return `La marca del auto es ${this.marca} y su modelo es ${this.modelo}`;
  }
}

let onix = new Vehiculo(2018, "Chevrolet", 12000, 100000);
onix.marcaModelo();

class Furgoneta extends Vehiculo {
  constructor(modelo, marca, precio, km, carga) {
    super(modelo, marca, precio, km);
    this._carga = carga;
  }

  get carga() {
    return this._carga;
  }

  set carga(valor) {
    this._carga = valor;
  }

  marcaModeloCarga() {
    return `${super.marcaModelo()} y tiene una capacidad de carga de ${
      this.carga
    } kg`;
  }
}

let furgoneta = new Furgoneta(2019, "Peugeot", 18888, 190000, 10000);

document.write(furgoneta.marcaModeloCarga());
