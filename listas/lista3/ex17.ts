const senha17: string = "1234";
let tentativas17: number = 0;
let entrou: boolean = false;

while (tentativas17 < 3 && !entrou) {
  const digitada: string = prompt("senha:") ?? "0";
  if (digitada === senha17) {
    entrou = true;
  } else {
    tentativas17 += 1;
    if (tentativas17 === 2) {
      alert("ultima tentativa!");
    }
  }
}

alert(entrou ? "liberado" : "bloqueado");
