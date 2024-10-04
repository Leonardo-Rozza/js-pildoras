let nombres = ["Lucy", "Mimi", "Marisol", "Leo"];
let edades = [13, 16, 25, 57, 33, 98, 34];

//El método slice() nos permite cortar un array, y nos devuelve otro, en donde el primer parametro es el índice de donde empieza y el segundo parámetro es donde termina, éste mismo es excluyente.
// Este método NO modifica el array original, solamente lo corta y nos devuelve uno nuevo.

let edadesSlice = edades.slice(2, 4); //Nos retorna [25, 57]; ya que el 4 es excluyente.
let edadesSlice2 = edades.slice(2); //Devuelve todo el array, desde el indice 2 hasta el final del mismo.

//El método splice() hace exactamente lo mismo pero SI modifica el array original.
//Con este metodo, usando su tercer argumento podemos insertar los elementos que querramos dentro de array.Nos sirve para posicionarnos en cualquier parte del array y agregar un elemento.

let edadesSplice = edades.splice(2, 3);
let edadesSplice2 = edades.splice(4, 0, "Leonardo"); //No posicionamos en el indice 4 y aregamos uno o mas elementos

document.write(edades);

//El metodo fill() rellena un array con elementos

let miArray = new Array(5);

miArray.fill("Leonardo");
miArray.fill("Indice 2", 2, 3); //Agrega el texto a partir del indice que le indicamos.

console.log(miArray);
