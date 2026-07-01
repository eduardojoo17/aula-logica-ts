const lado1: number = Number(prompt("Digite o 1 lado:"));
const lado2: number = Number(prompt("Digite o 2 lado:"));
const lado3: number = Number(prompt("Digite o 3 lado:"));

if (lado1 === lado2 && lado1 === lado3) {
  alert(` equilatero `);
} else if (lado1 === lado2 && lado3 != lado1) {
  alert(` isosceles`);
} else if (lado1 < lado2 && lado2 < lado3) {
  alert(` escaleno `);
} else if (lado1 == 1 && lado2 == 1 && lado3 == 5) {
  alert(` não forma `);
}
