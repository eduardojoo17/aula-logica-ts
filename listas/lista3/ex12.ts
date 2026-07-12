const n12: number = Number(prompt("fatorial de:"));
let fat: number = 1;

for (let i = 1; i <= n12; i++) {
  fat *= i;
}

alert(`${n12}! = ${fat}`);
