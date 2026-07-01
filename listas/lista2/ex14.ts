const numIda: number = Number(prompt("digite a idade:"));

if (numIda >= 60) {
  alert(`idoso ${numIda}`);
} else if (numIda >= 18) {
  alert(`adulto ${numIda}`);
} else if (numIda >= 12) {
  alert(`adolescente ${numIda}`);
} else if (numIda >= 0) {
  alert(`criança ${numIda}`);
}
