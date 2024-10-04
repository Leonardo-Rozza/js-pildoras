let edades = [13, 16, 25, 57, 33, 98, 34];

//El método push() agrega en la ultima posicion un elemento dentro del array.
edades.push(28, 29);

//document.writeln(edades);

//El método pop() elimina y devuelve el ultimo elemento de un array.
edades.pop();
edades.pop();

//document.writeln("</br>");
//document.writeln(edades);

let nombres = ["Lucy", "Mimi", "Marisol", "Leo"];

//El método unshift() agrega un elemento al inicio de un array.
nombres.unshift("Rata");
document.writeln(nombres);

//El método shift() elimina y devuelve el primer elemento un array.
let nombreEliminado = nombres.shift();
document.writeln("</br>" + nombreEliminado + "</br>");
document.writeln(nombres);
