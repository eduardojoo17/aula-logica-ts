function saudacaoL501(nome: string): void {
  alert(`Olá, ${nome}! Bem-vindo(a).`);
}

saudacaoL501(prompt("seu nome:") ?? "0");
