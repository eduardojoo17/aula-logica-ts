let nums09: number[] = [12, 5, 27, 8, 19];
let menor09: number = nums09[0];

for (let i = 1; i < nums09.length; i++) {
  if (nums09[i] < menor09) {
    menor09 = nums09[i];
  }
}

alert(`o menor e ${menor09}`);
