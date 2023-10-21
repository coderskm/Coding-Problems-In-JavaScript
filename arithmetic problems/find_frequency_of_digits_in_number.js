function digitsFreq(num) {
    let temp = num;
    let obj = {};
    while (num !== 0) {
        let digit = num % 10;
        if (!obj[digit]) {
            obj[digit] = 1;
        } else {
            obj[digit] += 1;
        }
        num = parseInt(num / 10);
    }
    console.log("frequency of all digits in", temp, "is:", obj);
}

digitsFreq(34298428);