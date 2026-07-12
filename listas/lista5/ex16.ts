function ehPrimoL516(n: number): boolean {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primosAteL516(max: number): number[] {
  let lista: number[] = [];
  for (let num = 2; num <= max; num++) {
    if (ehPrimoL516(num)) {
      lista.push(num);
    }
  }
  return lista;
}

alert(primosAteL516(Number(prompt("primos ate:"))).join(", "));
