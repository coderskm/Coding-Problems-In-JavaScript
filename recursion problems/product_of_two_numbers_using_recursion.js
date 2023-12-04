function product(N1, N2) {
    if (N1 !== 0) {
        return N2 + product((N1 - 1), N2);
    } 
    return 0;
}

console.log(product(9, 8));

