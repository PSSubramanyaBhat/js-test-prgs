function checkSquareNumber() {
  // document.writeln("PROGRAM 1.....\n");
  console.log("PROGRAM 1.....\n");
  var number = 32;
  var number2 = number;
  var flag = 0;
  var count = 0;

  while (number > 2) {
    // rem = number%2;

    if (number % 2 == 0) {
      count += 1;
      number = number / 2;
    } else {
      flag = 1;
      console.log("The number is not a square of 2");
      break;
    }
  }


  if (flag == 0) {
    if (number2 == 0) {
      console.log("The number is a square of 2 and it is 2 to the power 0");
    }
    if (number2 == 1) {
      console.log("The number is not a square of 2");
    }
    if (number2 > 1) {
      console.log(
        "The number is a square of 2 and it is 2 to the power " + (count + 1)
      );
    }
  }
}
checkSquareNumber();
