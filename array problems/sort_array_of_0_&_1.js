function sortArr0And1(arr) {
    let p1 = 0, p2 = arr.length - 1;
    while (p1 < p2) {
        if (arr[p1] === 1) {
            if (arr[p2] !== 1) {
                [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
            }
            p2--;
        } else {
            p1++;
        }
    }
    console.log("sorted array:", arr);
}

sortArr0And1([0, 1, 1, 0, 1, 1, 0, 0, 0, 1]);