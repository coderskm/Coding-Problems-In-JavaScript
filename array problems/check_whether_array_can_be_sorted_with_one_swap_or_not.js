function oneSwapSortOrNot(arr) {
    let first = 0, second = 0, count = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i - 1]) {
            count++;
            if (first == 0) {
                first = i;
            } else {
                second = i;
            }
        }
    }

    if (count > 2) {
        console.log(arr, "cannot be sorted with one swap");
        return;
    }
    else if (count === 0) {
        console.log(arr, "is already sorted");
        return;
    } else if (count === 1) {
        [arr[first - 1], arr[first]] = [arr[first], arr[first - 1]];
        console.log("given array sorted to:", arr);
        return;
    } else if (count === 2) {
        [arr[first - 1], arr[second]] = [arr[second], arr[first - 1]];
        console.log("given array sorted to:", arr);
        return;
    } else {
        return;
    }
}

oneSwapSortOrNot([1, 5, 3, 4, 2]);
oneSwapSortOrNot([1, 2, 4, 3, 5]);
oneSwapSortOrNot([4, 1, 2, 3]);
