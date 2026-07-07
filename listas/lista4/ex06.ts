let lista: number[] = [4, 7, 2, 9, 10, 3];
let par: number = 0;

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    par = par + 1;
  }
}

alert("tem " + par + " pares");
