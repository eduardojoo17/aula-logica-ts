const preco: number = Number(prompt("Digite o preço do produto:"));
const valorPago: number = Number(prompt("Digite o valor pago pelo cliente:"));

const trocoTotal: number = valorPago - preco;

const notasDe10: number = Math.floor(trocoTotal / 10);

const sobra: number = trocoTotal % 10;

alert(
  `Troco total: R$ ${trocoTotal.toFixed(2)}\nNotas de R$ 10: ${notasDe10}\nValor restante: R$ ${sobra.toFixed(2)}`,
);
