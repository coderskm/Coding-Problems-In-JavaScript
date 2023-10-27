function power(m, n) {
    if (n === 0) {
        return 1;
    }
    return power(m, (n - 1)) * m;
}

console.log(power(2, 5));