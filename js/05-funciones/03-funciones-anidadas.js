// const calculoHipotenusa = (catetoA, catetoB) => {
//   return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
// };

// let catetoA = prompt("Ingresa el valor del primer cateto");
// let catetoB = prompt("Ingresa el valor del segundo cateto");

// document.write(calculoHipotenusa(catetoA, catetoB));


//funciones anidadas.
//Es la misma funcion que la anterior, pero usando funciones anidadas.
const hipotenusa = (catetoA, catetoB) => {
  const calculoCateto = cateto => cateto * cateto;
  
  return Math.sqrt(calculoCateto(catetoA) + calculoCateto(catetoB));
}

let cateto1 = prompt("Ingresa el valor del primer cateto");
let cateto2 = prompt("Ingresa el valor del segundo cateto");

document.write(hipotenusa(cateto1, cateto2));

