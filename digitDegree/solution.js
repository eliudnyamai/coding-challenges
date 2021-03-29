function digitDegree(n) {
  var length = (n + "").replace(".", "").replace("-", "").length;
  var newNumber = n;
  var digits;
  var digitDegree = 0;
  while (length > 1) {
    digits = Array.from(newNumber.toString()).map(Number);
    newNumber = digits.reduce((a, b) => a + b);
    length = (newNumber + "").replace(".", "").replace("-", "").length;
    digitDegree++;
  }
  return digitDegree;
}
