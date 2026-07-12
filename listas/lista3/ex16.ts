const secreto: number = 7;
let palpite: number = Number(prompt("adivinhe (1 a 10):"));
let tentativas16: number = 1;

while (palpite !== secreto) {
  palpite = Number(prompt("errou! tente de novo:"));
  tentativas16 += 1;
}

alert(`Acertou em ${tentativas16} tentativas!`);
