const t: number = Number(prompt("digite um numero:"));
let res3: string = "";

for (let i = 1; i <= 10; i++) {
  res3 += i + " x " + t + " = " + i * t + "\n";
}

alert(res3);
