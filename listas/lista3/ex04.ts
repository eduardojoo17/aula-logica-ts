const s: number = Number(prompt("digite um numero:"));

let somA: number = 0;

for (let i = 1; i <= s; i++) {
  somA += Number(i);
}
alert(somA);
