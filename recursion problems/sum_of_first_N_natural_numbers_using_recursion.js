function sum(N) {
    if (N === 0) {
        return 0;
    }
    return sum(N - 1) + N;
}

console.log(sum(3));