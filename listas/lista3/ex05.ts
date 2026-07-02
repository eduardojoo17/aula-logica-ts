const m: number = Number(prompt("digite um numero:"));
let res5: string = "";

for (let i = 1; i <= m; i++) {
  res5 += (i*m) + " ";
}

alert(res5);
