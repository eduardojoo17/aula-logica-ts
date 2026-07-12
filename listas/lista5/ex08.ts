function situacaoL508(nota: number): string {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

let notaL508: number = Number(prompt("nota:"));
alert(situacaoL508(notaL508));
