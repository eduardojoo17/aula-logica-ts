let precos12: number[] = [50, 120, 30, 200, 90];
let caros12: number[] = precos12.filter((p) => p > 100);

alert(`acima de 100: ${caros12.join(", ")}`);
