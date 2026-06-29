const totalSegundos: number = Number(prompt("Digite o total de segundos:"));

const horas: number = Math.floor(totalSegundos / 3600);
const segundosRestantesDasHoras: number = totalSegundos % 3600;
const minutosS: number = Math.floor(segundosRestantesDasHoras / 60);
const segundosFinais: number = segundosRestantesDasHoras % 60;

alert(
  `${totalSegundos} segundos equivalem a:\n${horas}h ${minutosS}m ${segundosFinais}s`,
);
