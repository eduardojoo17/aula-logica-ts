function temNumeroL520(texto: string): boolean {
  for (let i = 0; i < texto.length; i++) {
    if ("0123456789".includes(texto[i])) {
      return true;
    }
  }
  return false;
}

function senhaForteL520(senha: string): string {
  if (senha.length < 8) {
    return "Fraca: 8+ caracteres";
  }
  if (!temNumeroL520(senha)) {
    return "Fraca: falta um numero";
  }
  return "Senha forte";
}

alert(senhaForteL520(prompt("crie uma senha:") ?? "0"));
