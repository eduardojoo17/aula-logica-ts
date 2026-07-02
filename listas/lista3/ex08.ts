const sN: number = Number(prompt(" digite quantos numeros: "));

let res8: number = 0;

for (let i = 1; i <= sN; i++) {
  const sN3: number = Number(prompt(`Digite o ${i}º numero`));
  res8 += sN3;
}
alert(res8);
