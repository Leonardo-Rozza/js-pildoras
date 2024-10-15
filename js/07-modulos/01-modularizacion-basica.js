export const calculoIva = (valor) => valor * 0.21;

export const calculoIrpf = (valor) => valor * 0.15;

export const calculoTotal = (valor) => {
  let total = valor - calculoIrpf(valor) + calculoIva(valor);

  return total;
};
