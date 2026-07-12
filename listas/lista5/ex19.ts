function calcularL519(a: number, b: number, op: string): number | string {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/") {
    return a / b;
  } else {
    return "Operacao invalida";
  }
}

let aL519: number = Number(prompt("1º numero:"));
let bL519: number = Number(prompt("2º numero:"));
let opL519: string = prompt("operacao (+ - * /):") ?? "0";
alert(`${aL519} ${opL519} ${bL519} = ${calcularL519(aL519, bL519, opL519)}`);
