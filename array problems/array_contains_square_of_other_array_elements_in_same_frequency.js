function checkSquare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let freq1 = {}, freq2 = {};
    for (let key of arr1) {
        freq1[key] = (freq1[key] || 0) + 1;
    }
    for (let key of arr2) {
        freq2[key] = (freq2[key] || 0) + 1;
    }

    for (let key in freq1) {
        if (!(key ** 2 in freq2)) {return false;}
        if (freq2[key ** 2] !== freq1[key]) {return false;}
    }
    return true;
}

console.log(checkSquare([2,2,1], [1,4,5]));