let convidados13: string[] = ["Ana", "Bruno", "Caio"];
let nome13: string = prompt("quem voce procura?") ?? "0";

if (convidados13.includes(nome13)) {
  alert(`${nome13} esta na lista`);
} else {
  alert(`${nome13} nao esta`);
}
