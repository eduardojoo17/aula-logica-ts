function mediaL505(a: number, b: number): number {
  return (a + b) / 2;
}

let n1L505: number = Number(prompt("nota 1:"));
let n2L505: number = Number(prompt("nota 2:"));
alert(`media = ${mediaL505(n1L505, n2L505).toFixed(1)}`);
