function palindromeNumOrNot(num) {
    let temp = num;
    let rev = 0;
    while (num !== 0) {
        let digit = num % 10;
        rev = (rev * 10) + digit;
        num = parseInt(num / 10);
    }
    if (temp === rev) {
        console.log(temp, "is palindrome number");
    } else {
        console.log(temp, "is not palindrome number");
        
    }
}

palindromeNumOrNot(1212)