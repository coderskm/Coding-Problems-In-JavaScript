function maxPairSum(arr) {
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
    let maxSum = largest + secondLargest;
    console.log(`Maximum pair Sum in array:${maxSum}`);
}

maxPairSum([1, 2, 3, 89, 4, 10]);