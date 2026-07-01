const numerPiZ: number = Number(prompt("digite um numero?"));

if (numerPiZ % 2 == 0 && numerPiZ != 0) {
  alert("par");
} else if (numerPiZ % 2 != 0) {
  alert("impar");
} else {
  alert("seu numero é o zero");
}
