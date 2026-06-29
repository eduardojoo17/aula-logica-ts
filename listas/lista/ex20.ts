const salarioBruto: number = Number(
  prompt("Digite o salário bruto (ex: 3000):"),
);
const descontoINSS: number = salarioBruto * 0.11;
const descontoIR: number = salarioBruto * 0.075;
const descontoVT: number = salarioBruto * 0.06;
const salarioLiquido: number =
  salarioBruto - (descontoINSS + descontoIR + descontoVT);
alert(
  `Resultados da Folha de Pagamento:\n` +
    `INSS: R$ ${descontoINSS.toFixed(2)}\n` +
    `IR: R$ ${descontoIR.toFixed(2)}\n` +
    `VT: R$ ${descontoVT.toFixed(2)}\n` +
    `---------------------------\n` +
    `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`,
);
