let date = new Map();

date.set("DNI", 12383492088);
date.set("name", "Leonardo");
date.set("last_name", "Rozza");
date.set("age", 29);

// console.log(date.get("name"));
// document.writeln(date.get("last_name"));

class MapaTipos extends Map {
  constructor(tipoClave, tipoValores, valores) {
    if (valores) {
      for (let [clave, valor] of valores) {
        if (typeof clave !== tipoClave || typeof valor !== tipoValores) {
          throw new TypeError(`Error en los tipos ${clave}, ${valor}`);

          // document.write(
          //   `Los tipos de ${clave}, ${valor} no se corresponden. </br>`
          // );
        }
      }
    }
    super(valores);
  }
}

let misDatos = [
  ["nombre", "leonardo"],
  ["apellido", "rozza"],
  //["edad", 19],
];

let datos = new MapaTipos("string", "string", misDatos);

document.write(datos.get("nombre"));
