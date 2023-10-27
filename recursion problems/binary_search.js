function binarySearch(arr, start, end, value) {
    let middle = Math.floor((start + end) / 2);
    if (start > end) return -1;
    else if (value > arr[middle]) return binarySearch(arr, middle + 1, end, value);
    else if (value < arr[middle]) return binarySearch(arr, start, middle - 1, value);
    else return middle;
}

console.log(binarySearch([12, 56, 79, 90, 235, 678, 1204], 0, 6, 79));
