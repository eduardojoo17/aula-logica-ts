const login: string = prompt("Digite o login:") ?? "0";
const senha: string = prompt("Digite a senha:") ?? "0";

if (login === "admin" && senha === "1234") {
  alert(` ok `);
} else if (login !== "admin") {
  alert(` login incorreto `);
} else if (senha !== "1234") {
  alert(` senha incorreta `);
}
