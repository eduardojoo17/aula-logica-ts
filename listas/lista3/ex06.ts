const nomeM: string = prompt("escreva um nome:") ?? "0";
const v: number = Number(prompt("quantas vezes:"));
let res6: string = "";

for (let i = 1; i <= v; i++) {
  res6 += nomeM + " pedro " ;
}

alert(res6);
