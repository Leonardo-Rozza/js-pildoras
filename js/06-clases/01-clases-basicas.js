class User{
  constructor(name, password, profile) {
    this.name = name;
    this.password = password;
    this.profile = profile;
  }

  greet() {
    document.write(`Hi, my name is ${this.name} and my profile is ${this.profile} </br>`);
  }

  login() {
    return "I am logging in";
  }
  logout() {
    return "I am logging out";
  }
}


class Student extends User {
  constructor(name, password, profile, curse) {
    super(name, password, profile);
    this.curse = curse;
  }

  study(issue) {
    document.write(`I am studying ${issue} </br>`);
  }
}

let leonardo = new User("Leonardo Rozza", "1234", "Developer");
let juan = new User("Juan", "1234253", "administrator");
let lulu = new Student("Lulu", "1234", "Estudiante", "Desarrollo Web");

// leonardo.greet();
// juan.greet();
lulu.greet();
lulu.study("Web Development");