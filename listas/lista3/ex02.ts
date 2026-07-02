const n1: number = Number(prompt("digite um numero:"));
let res: string = "";

for (let i = n1; i > 0; i--) {
  res += i + " ";
}

alert(res);
