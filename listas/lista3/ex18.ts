const n18: number = Number(prompt("quantos termos:"));
let a18: number = 0;
let b18: number = 1;
let res18: string = "";

for (let i = 1; i <= n18; i++) {
  res18 += a18 + " ";
  const prox: number = a18 + b18;
  a18 = b18;
  b18 = prox;
}

alert(res18);
