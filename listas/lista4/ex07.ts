let lista1: number[] = [4, 7, 2, 9, 10, 3];
let par1: number = 0;

for (let i = 0; i < lista1.length; i++) {
  par1 = par1 + lista1[i];
}

alert(`média ${par1 / lista1.length}`);
