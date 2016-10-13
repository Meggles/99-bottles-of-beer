// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.

var bottles = "bottles";
var i = 99;

while (i <= 99) {
  i--;
  var oneLess = (i - 1);
  if (i >= 1) {
    if (i === 1) {
      bottles = bottles.replace(/s/, '');
      oneLess = "no more";
    }
    console.log(i + " " + bottles + " of beer on the wall, " + i + " " + bottles + " of beer. Take one down and pass it around, " + oneLess + " bottles of beer on the wall.");
  }
  if (i === 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
}
