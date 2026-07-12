function celsiusParaFL509(c: number): number {
  return (c * 9) / 5 + 32;
}

let cL509: number = Number(prompt("temperatura em C:"));
alert(`${cL509}C = ${celsiusParaFL509(cL509)}F`);
