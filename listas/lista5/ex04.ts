function ehParL504(n: number): boolean {
  return n % 2 === 0;
}

let numeroL504: number = Number(prompt("numero:"));
if (ehParL504(numeroL504)) {
  alert(`${numeroL504} e par`);
} else {
  alert(`${numeroL504} e impar`);
}
