const mN1: number = Number(prompt(" digite quantos numeros: "));

let res10: number = 0;

for (let i = 1; i <= mN1; i++) {
  const sN: number = Number(prompt(`Digite o ${i}º numero`));
  
    
  
  res10 += sN;
}
alert(res10);
