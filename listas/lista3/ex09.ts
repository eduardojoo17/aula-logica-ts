const qn: number = Number(prompt(" digite quantas notas: "));

let res9: number = 0;

for (let i = 1; i <= qn; i++) {
  const sN: number = Number(prompt(`Digite a ${i}º nota`));
  res9 += sN;
}
alert(res9/qn);
