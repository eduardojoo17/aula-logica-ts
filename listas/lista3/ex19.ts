const n19: number = Number(prompt("primos ate:"));
let res19: string = "";

for (let num = 2; num <= n19; num++) {
  let ehPrimo: boolean = true;
  for (let d = 2; d < num; d++) {
    if (num % d === 0) {
      ehPrimo = false;
    }
  }
  if (ehPrimo) {
    res19 += num + " ";
  }
}

alert(res19);
