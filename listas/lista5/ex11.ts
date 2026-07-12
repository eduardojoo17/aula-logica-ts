function saudacaoHorarioL511(hora: number): string {
  if (hora < 12) {
    return "Bom dia";
  } else if (hora < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

let horaL511: number = Number(prompt("que horas sao? (0-23)"));
alert(saudacaoHorarioL511(horaL511));
