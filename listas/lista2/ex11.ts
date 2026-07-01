const numa: number = Number(prompt("digite uma nota"));

if (numa >= 9) {
  alert("a");
} else if (numa >= 7) {
  alert(`b`);
} else if (numa >= 6) {
  alert(`c`);
} else if (numa >= 4) {
  alert(`d`);
} else if (numa < 4) {
  alert(`f`);
}
