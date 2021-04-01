//Prerequisite->you must have a basic understanding of chess
function bishopAndPawn(bishop, pawn) {
    //First we convert the bishop and pawn positions to postions in a conventional array
    //starting from 0,0
  var letters = [];
  letters["a"] = 0;
  letters["b"] = 1;
  letters["c"] = 2;
  letters["d"] = 3;
  letters["e"] = 4;
  letters["f"] = 5;
  letters["g"] = 6;
  letters["h"] = 7;
  var bishopPosition = [letters[bishop[0]], bishop[1] - 1];
  var pawnPosition = [letters[pawn[0]], pawn[1] - 1];
  //if the absolute diferrence between the x  cordinates of bishop and pawn is equal
  //and their Y cordinates' absolute diffrence is also equal then bishop can validly capture pawn
  //that the pattern which should be discovered
  if (
    Math.abs(bishopPosition[0] - pawnPosition[0]) ==
    Math.abs(bishopPosition[1] - pawnPosition[1])
  ) {
    return true;
  }
  return false;
}
bishopAndPawn('a1', 'c3'); // true
bishopAndPawn('h1', 'h3'); // false
bishopAndPawn('a5', 'c3'); // true
