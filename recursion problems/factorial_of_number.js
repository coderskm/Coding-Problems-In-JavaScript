function factorial(N) {
    if (N === 0) {
        return 1;
    }
    return factorial(N - 1) * N;
}

console.log(factorial(7));