let alunos19: { nome: string; nota: number }[] = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Caio", nota: 9 },
  { nome: "Duda", nota: 4 },
];

let aprovados19 = alunos19.filter((a) => a.nota >= 6);
let nomesAprovados19 = aprovados19.map((a) => a.nome);

alert(`aprovados: ${nomesAprovados19.join(", ")}`);
