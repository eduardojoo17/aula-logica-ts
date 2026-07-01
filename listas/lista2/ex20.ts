const pesoA: number = Number(prompt("Digite o seu peso em kg :"));
const alturaA: number = Number(prompt("Digite a sua altura em metros:"));

const imcA: number = pesoA / (alturaA * alturaA);

alert(`O seu IMC é: ${imcA.toFixed(2)}`);

if (imcA < 18.5) {
  alert(`abaixo`);
} else if (imcA < 25) {
  alert(`normal`);
} else if (imcA < 30) {
  alert(`sobrepeso`);
} else if (imcA >= 30) {
  alert("obesidade");
}
