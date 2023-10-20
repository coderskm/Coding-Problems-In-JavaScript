function sumOfDigits(num) {
    let temp = num;
    let sum = 0;
    while (num !== 0) {
        let digit = num % 10;
        sum += digit;
        num = parseInt(num / 10);
    }
    console.log("sum of digits in number", temp, "is:", sum);
}

sumOfDigits(69);