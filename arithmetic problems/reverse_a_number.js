function reverseNum(num) {
    let temp = num;
    let rev = 0;
    while (num !== 0) {
        let digit = num % 10;
        rev = (rev * 10) + digit;
        num = parseInt(num / 10);
    }
    console.log("reverse of",temp,":-", rev);
}

reverseNum(121345);