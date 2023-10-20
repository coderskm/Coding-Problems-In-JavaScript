function naturalNumSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    console.log("sum of first", n, "natural number is", sum);
}

naturalNumSum(18)