let row, col, space;
for (row = 5; row >= 1; row--) {
  space = "";
  for (col = 5; col >= row; col--) {
    space += "*";
  }
  console.log(space);
}