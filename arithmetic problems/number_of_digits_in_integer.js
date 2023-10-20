function numOfDigits(num) {
  let temp = num;
  let totalDigits = 0;
  while (num !== 0) {
    num % 10;
    num = parseInt(num / 10);
    totalDigits++;
  }
  console.log("total number of digits in", temp, ":", totalDigits);
}
numOfDigits(35679012);
