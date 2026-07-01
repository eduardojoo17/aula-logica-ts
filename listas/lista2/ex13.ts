const num1a: number = Number(prompt("digite o numero:"));
const num2b: number = Number(prompt("digite o numero:"));
const num3c: number = Number(prompt("digite o numero:"));

if (num1a > num2b && num1a > num3c) {
  alert(`o Maior é ${num1a}`);
} else if (num2b > num1a && num2b > num3c) {
  alert(`o Maior é ${num2b}`);
} else if (num3c > num1a && num3c > num2b) {
  alert(`o Maior é ${num3c}`);
}
