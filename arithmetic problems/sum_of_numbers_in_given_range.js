function sumInRange(n1, n2) {
    let sum = 0;
    if (n1 > n2) {
        [n1, n2] = [n2, n1];
    }
    for (let i = n1; i <= n2; i++){
        sum += i;
    }
    console.log("Sum of numbers between", n1, "and", n2, "is", sum);
}

sumInRange(1, -6);