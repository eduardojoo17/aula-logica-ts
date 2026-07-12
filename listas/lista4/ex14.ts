let fila14: string[] = ["Ana", "Bruno", "Caio", "Duda"];
let nome14: string = prompt("quem?") ?? "0";
let pos14: number = fila14.indexOf(nome14);

if (pos14 === -1) {
  alert(`${nome14} nao esta na fila`);
} else {
  alert(`${nome14} e o ${pos14 + 1}º`);
}
