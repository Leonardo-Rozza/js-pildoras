class ManejoArray extends Array {
  get first() {
    return this[0];
  }

  get last() {
    return this[this.length - 1];
  }
}

let manejoArray1 = new ManejoArray();

manejoArray1.push("Leonardo", "Iván", "Rozza");

document.writeln(manejoArray1.first);
document.writeln(manejoArray1.last);
