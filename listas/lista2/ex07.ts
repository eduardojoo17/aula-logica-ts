const temDesconto: number = Number(prompt("digite o valor"));

if (temDesconto > 100) {
  const desconto: number = temDesconto - (temDesconto * 10) / 100;
  alert(`${desconto}`);
} else {
  alert("não tem desconto");
}
