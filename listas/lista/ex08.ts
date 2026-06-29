const exe8: number = Number(prompt("digite o primeiro numero"));
const exe8B: number = Number(prompt("digite o segundo numero"));

const calSoma: number = exe8 + exe8B;
const calSub: number = exe8 - exe8B;
const caldiv: number = exe8 / exe8B;
const calMul: number = exe8 * exe8B;
const calRes: number = exe8 % exe8B;

alert(
  `A soma${calSoma}, subtração${calSub},divisão${caldiv},multiplicação${calMul} e resto${calRes} .`,
);
