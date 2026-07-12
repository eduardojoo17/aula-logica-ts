function inverterL517(texto: string): string {
  let invertido: string = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;
}

let palavraL517: string = prompt("palavra:") ?? "0";
alert(inverterL517(palavraL517));
