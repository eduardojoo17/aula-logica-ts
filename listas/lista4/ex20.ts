let alunos20: { nome: string; nota: number }[] = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Caio", nota: 9 },
  { nome: "Duda", nota: 7 },
];

let melhor20 = alunos20[0];

for (let i = 1; i < alunos20.length; i++) {
  if (alunos20[i].nota > melhor20.nota) {
    melhor20 = alunos20[i];
  }
}

alert(`melhor: ${melhor20.nome} (${melhor20.nota})`);
