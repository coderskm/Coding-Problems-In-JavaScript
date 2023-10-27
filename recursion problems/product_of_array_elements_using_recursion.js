function prodArr(arr, n) {
    if (n === 0) {
        return arr[n];
    }
    return arr[n] * prodArr(arr, (n - 1));
}

console.log(prodArr([12, 4, 3,7], 3));
