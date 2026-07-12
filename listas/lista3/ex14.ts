const qtd14: number = Number(prompt("quantos numeros:"));
let pares14: number = 0;
let impares14: number = 0;

for (let i = 1; i <= qtd14; i++) {
  const x: number = Number(prompt(`Digite o ${i}º numero`));
  if (x % 2 === 0) {
    pares14 += 1;
  } else {
    impares14 += 1;
  }
}

alert(`${pares14} pares e ${impares14} impares`);
