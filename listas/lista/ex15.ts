const totalConta: number = Number(prompt("Digite o valor total da conta:"));
const numPessoas: number = Number(
  prompt("Digite o número de pessoas para dividir:"),
);

const contaComGorjeta: number = totalConta * 1.1;

const valorPorPessoa: number = contaComGorjeta / numPessoas;

alert(
  `O total com gorjeta é R$ ${contaComGorjeta.toFixed(2)} e cada um vai pagar: R$ ${valorPorPessoa.toFixed(2)}`,
);
