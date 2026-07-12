function fatorialRecL518(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * fatorialRecL518(n - 1);
}

let nL518: number = Number(prompt("fatorial de:"));
alert(`${nL518}! = ${fatorialRecL518(nL518)}`);
