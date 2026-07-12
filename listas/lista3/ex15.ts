let seg: number = Number(prompt("segundos (1 a 59):"));

while (seg < 1 || seg > 59) {
  seg = Number(prompt("invalido! de 1 a 59:"));
}

let res15: string = "";

for (let i = 1; i <= seg; i++) {
  res15 += i + " ";
}

alert(res15);
