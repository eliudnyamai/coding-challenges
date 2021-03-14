function absoluteValuesSumMinimization(a) {
  var x;
  var sumsArray = [];
  for (let i = 0; i < a.length; i++) {
    x = a[i];
    var absSum = 0;
    for (let j = 0; j < a.length; j++) {
      //get the absvaluessumminimization for the specific no by looping through
      absSum += Math.abs(a[i] - a[j]);
    }
    //push  it to sums array
    sumsArray.push(absSum);
    //do it for all other elements
  }
  //get the minimum absoluteSumMinimization
  var minAbs = Math.min(...sumsArray);
  //get its index in sumsArray then map it to original array to get the value which minimizes
  return a[sumsArray.findIndex((e) => e == minAbs)];
}
