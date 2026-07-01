const numMmI: number = Number(prompt("digite um numero"));
const numMmI2: number = Number(prompt("digite outro numero"));

if (numMmI > numMmI2) {
  alert(`o maior é ${numMmI}`);
} else if (numMmI < numMmI2) {
  alert(`o maior é ${numMmI2}`);
} else {
  alert("iguais");
}
