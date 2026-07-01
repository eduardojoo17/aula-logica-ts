const numFila: number = Number(prompt("digite a idade:"));
const FilaA: boolean = Boolean(prompt("é gestante true/false:"));
const FilaB: boolean = Boolean(
  prompt("é pessoa com deficiencia? true / false:")
);

if (numFila > 65 || FilaA == true || FilaB == true) {
  alert(` preferencial`);
}
