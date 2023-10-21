function secondSmallestElement(arr) {
    let smallest = Number.MAX_VALUE;
    let secondSmallest = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else {
            if (arr[i]<secondSmallest && arr[i]>smallest) {
                secondSmallest = arr[i];
            }
        }
    }
    console.log("second largest element in", arr, " :-", secondSmallest);
}

secondSmallestElement([3, 1, 2, 6, 7, 4, 9, 5]);