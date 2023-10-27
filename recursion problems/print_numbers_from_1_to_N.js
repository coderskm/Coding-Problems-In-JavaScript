function printNum(N) {
    if (N > 0) {
        printNum(N - 1);
        console.log(N);
    }
}

printNum(7);