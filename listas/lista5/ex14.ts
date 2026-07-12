function contarParesL514(lista: number[]): number {
  let conta: number = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      conta += 1;
    }
  }
  return conta;
}

let numsL514: number[] = [4, 7, 2, 9, 10, 3];
alert(`pares: ${contarParesL514(numsL514)}`);
