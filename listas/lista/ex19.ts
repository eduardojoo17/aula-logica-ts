let valorSaque: number = Number(
  prompt("Digite o valor do saque (múltiplo de 10):"),
);
const notas100: number = Math.floor(valorSaque / 100);
let resto: number = valorSaque % 100;
const notas50: number = Math.floor(resto / 50);
resto = resto % 50;
const notas20: number = Math.floor(resto / 20);
resto = resto % 20;
const notas10: number = Math.floor(resto / 10);

alert(
  `Notas a entregar:\n` +
    `Notas de R$ 100: ${notas100}\n` +
    `Notas de R$ 50: ${notas50}\n` +
    `Notas de R$ 20: ${notas20}\n` +
    `Notas de R$ 10: ${notas10}`,
);
