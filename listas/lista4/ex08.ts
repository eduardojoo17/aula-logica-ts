let nums08: number[] = [12, 5, 27, 8, 19];
let maior08: number = nums08[0];

for (let i = 1; i < nums08.length; i++) {
  if (nums08[i] > maior08) {
    maior08 = nums08[i];
  }
}

alert(`o maior e ${maior08}`);
