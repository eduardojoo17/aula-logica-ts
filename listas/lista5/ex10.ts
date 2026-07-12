function fatorialL510(n: number): number {
  let resultado: number = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

let nL510: number = Number(prompt("fatorial de:"));
alert(`${nL510}! = ${fatorialL510(nL510)}`);
