const p: number = Number(prompt(" digite um numero: "));
let res7: string = "";

for (let i = 1; i <= p; i++) {
  if (i % 2 == 0) {
    res7 += i + " ";
  }
}
alert(res7);
