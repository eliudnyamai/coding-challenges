function depositProfit(deposit, rate, threshold) {
  var increase = 0;
  var availableAmount = deposit;
  var years = 0;
  while (availableAmount < threshold) {
    increase = (deposit * rate) / 100;
    availableAmount = deposit + increase;
    deposit = availableAmount;
    years++;
  }
  return years;
}
