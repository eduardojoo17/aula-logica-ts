let letras16: string[] = ["A", "B", "C", "D"];
let invertido16: string[] = [];

for (let i = letras16.length - 1; i >= 0; i--) {
  invertido16.push(letras16[i]);
}

alert(invertido16.join(", "));
