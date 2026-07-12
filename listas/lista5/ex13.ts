function somarL513(lista: number[]): number {
  let total: number = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  return total;
}

let valoresL513: number[] = [10, 25, 5, 40, 20];
alert(`soma = ${somarL513(valoresL513)}`);
