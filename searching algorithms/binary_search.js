function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (x < arr[mid]) {
            end = mid - 1;
        } else if (x > arr[mid]) {
            start = mid + 1;
        } else {
            console.log(`${x} is present in array at index ${mid}`);
            return;
        }
    }
    console.log(`${x} is not present in array`);
}

binarySearch([9, 12, 87, 100, 345, 497], 11);
binarySearch([9, 12, 87, 100, 345, 497], 9);