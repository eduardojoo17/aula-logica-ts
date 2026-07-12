let votos17: string[] = ["sim", "não", "sim", "sim", "não"];
let conta17: number = 0;

for (let i = 0; i < votos17.length; i++) {
  if (votos17[i] === "sim") {
    conta17 += 1;
  }
}

alert(`"sim" apareceu ${conta17} vezes`);
