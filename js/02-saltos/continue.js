const salarios = [];
let numTrabajador = 1;

for (let i = 0; i < 5; i++) {
  let salario = prompt(
    "Introduce el salario del trabajador " + numTrabajador++
  );
  if (salario < 1000) continue;
  salarios[i] = salario - (salario * 0, 25);
}

for (const salario of salarios) {
  document.write(salario, "</br>");
}
