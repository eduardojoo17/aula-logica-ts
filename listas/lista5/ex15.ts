function soParesL515(lista: number[]): number[] {
  let novos: number[] = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      novos.push(lista[i]);
    }
  }
  return novos;
}

let numsL515: number[] = [4, 7, 2, 9, 10, 3];
alert(`pares: ${soParesL515(numsL515).join(", ")}`);
