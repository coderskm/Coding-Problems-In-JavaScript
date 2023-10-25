function powerOfTwoOrNot(num) {
    let temp = num;
    if (num === 1 || num === 2) {
        console.log(num, "is power of 2");
        return;
    }
    else if (num === 0) {
        console.log("0 is not power of 2");
        return;
    } else {
        while (num !== 1) {
            if (num % 2 !== 0) {
                console.log(temp, "is not power of 2");
                return;
            }
            num = num / 2;
        }
        console.log(temp, "is power of 2");
    }
}
powerOfTwoOrNot(132);