function maiorL506(a: number, b: number): number {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let xL506: number = Number(prompt("1º numero:"));
let yL506: number = Number(prompt("2º numero:"));
alert(`o maior e ${maiorL506(xL506, yL506)}`);
