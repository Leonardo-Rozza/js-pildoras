// Una clase abstracta en programacion tiene como finalidad, marcar el diseño de la herencia, que deben seguir todas las clases que heredan de ella.
//Para que una clase, sea considerada abstracta, debe tener como minimo 1 método abstracto (un metodo que se declare, pero que no se implementa. Se deja vacio.) Pero obliga a la clase que hereda a implementarlo SI o SI.
//Una de las carectiristicas principales de las clases abstr. es que NO se pueden instanciar.

class Persona {
  constructor() {
    if (this.constructor === Persona)
      throw new Error(
        "La clase persona es abstracta y no se puede instanciar."
      );
  }

  //Como en JS no tenemos el modificador de acceso "abstract" normalmente se hace que el metodo abstracto lanze una exepcion
  habla() {
    throw new Error("Este método abstracto hay que sobreescribirlo.");
  }
}

class Empleado extends Persona {
  habla() {
    return "El empleado habla español";
  }
}

class Alumno extends Persona {
  habla() {
    return `</br> El alumno habla chino`;
  }
}

let empleado1 = new Empleado();
let alumno1 = new Alumno();
// let persona = new Persona();

document.write(empleado1.habla());
document.write(alumno1.habla());
