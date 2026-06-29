const exe13: number = Number(prompt("digite o salario inicial"));
const exe13b: number = Number(prompt("digite a porcentagem de aumento"));

const reajuste: number = exe13 * (1 + exe13b / 100);

alert(`o valor é ${reajuste} .`);
