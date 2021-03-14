// check problem document for explanation
function circleOfNumbers(n, firstNumber) {
  var half = n / 2;
  var radiallyOpposite;
  firstNumber >= half
    ? (radiallyOpposite = firstNumber - half)
    : (radiallyOpposite = firstNumber + half);
  return radiallyOpposite;
}
// circleOfNumbers(10,5)==0
// circleOfNumbers(10, 2) == 7
// circleOfNumbers(10, 3) == 8;
// circleOfNumbers(10, 8) == 3;
