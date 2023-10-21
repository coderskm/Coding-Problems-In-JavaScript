function secondLargestElement(arr) {
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else {
            if (arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i];
            }
        }
    }
    console.log("second largest element in", arr, " :-", secondLargest);
}

secondLargestElement([3, 1, 2, 6, 7, 4, 9, 5]);