function median(arr1, arr2) {
    let i = 0, j = 0;
    let final = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            final.push(arr1[i]);
            i++;
        } else {
            final.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        final.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        final.push(arr2[j]);
        j++;
    }
    if (final.length % 2 !== 0) {
        let index = Math.floor(final.length / 2);
        let median = final[index];
        console.log("median of sorted arrays", arr1, "and", arr2, "is:", median);
        return;
    } else {
        let index = final.length / 2;
        let e1 = final[index];
        let e2 = final[index - 1];
        let median = (e1 + e2) / 2;
        console.log("median of sorted arrays", arr1, "and", arr2, "is:", median);
        return;
    }
}

median([3, 4], [1, 2]);
