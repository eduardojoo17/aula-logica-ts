const n: number = Number(prompt("digite um numero:"));
let result: string = "";

for (let index = 1; index <= n; index++) {
  result += index + " ";
}

alert(result);
