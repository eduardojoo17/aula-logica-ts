function ehPrimoL512(n: number): boolean {
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

let nL512: number = Number(prompt("numero:"));
if (ehPrimoL512(nL512)) {
  alert(`${nL512} e primo`);
} else {
  alert(`${nL512} nao e primo`);
}
