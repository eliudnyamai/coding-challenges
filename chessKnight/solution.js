function chessKnight(cell) {
  var validMoves = [
    [2, 1],
    [-2, 1],
    [-2, -1],
    [2, -1],
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
  ];
  var letters = [];
  var moves = 0;
  //convert the letters to x-cordinates in a conventional array 
  letters["a"] = 0;
  letters["b"] = 1;
  letters["c"] = 2;
  letters["d"] = 3;
  letters["e"] = 4;
  letters["f"] = 5;
  letters["g"] = 6;
  letters["h"] = 7;
  var cellPosition = Array.from(cell);
  var cellPositionArray = [letters[cellPosition[0]], cellPosition[1] - 1];
  for (let i = 0; i < validMoves.length; i++) {
    console.log(cellPositionArray[0] - validMoves[i][0]);
    if (betweenZeroAndSeven(cellPositionArray[0] - validMoves[i][0])) {
      if (betweenZeroAndSeven(cellPositionArray[1] - validMoves[i][1])) {
        moves++;
      }
    }
  }
  return moves;
}
function betweenZeroAndSeven(n) {
  if (n >= 0 && n <= 7) {
    return true;
  }
  return false;
}
