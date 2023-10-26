function mergeSortedArr(arr1, arr2) {
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
    console.log(arr1, "and", arr2, "merged into:", final);
}

mergeSortedArr([2, 5, 8, 9], [1, 3, 4, 7]);