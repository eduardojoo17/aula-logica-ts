const peso: number = Number(prompt("Digite o seu peso em kg :"));
const altura: number = Number(prompt("Digite a sua altura em metros:"));

const imc: number = peso / (altura * altura);

alert(`O seu IMC é: ${imc.toFixed(2)}`);
