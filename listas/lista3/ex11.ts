const a: number = Number(prompt("de:"));
const b: number = Number(prompt("ate:"));
let res11: string = "";

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    res11 += i + " ";
  }
}

alert(res11);
