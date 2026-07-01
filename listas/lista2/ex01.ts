const idade: number = Number(prompt("Digite sua idade:")) ?? "0";

if (idade >= 18) alert(`${idade} maior de idade`);
if (idade < 18) alert(`${idade} menor de idade`);


