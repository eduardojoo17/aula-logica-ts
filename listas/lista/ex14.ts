const exe14: number = Number(prompt("Digite o total de segundos:"));

const minutos: number = Math.floor(exe14 / 60);

const segundosRestantes: number = exe14 % 60;

alert(
  `${exe14} segundos equivalem a: ${minutos} minutos e ${segundosRestantes} segundos.`,
);
