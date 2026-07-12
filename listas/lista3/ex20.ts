let opcao: string = "";
let total: number = 0;

while (opcao !== "3") {
  opcao = prompt("1-Depositar 2-Saldo 3-Sair") ?? "0";
  if (opcao === "1") {
    const valor: number = Number(prompt("valor:"));
    total += valor;
  } else if (opcao === "2") {
    alert(`Saldo: R$ ${total}`);
  }
}

alert("Ate logo!");
