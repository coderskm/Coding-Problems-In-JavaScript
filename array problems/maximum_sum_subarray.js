function maxSumSubArray(arr) {
    let maxSum = Number.MIN_VALUE;
    let currSum = 0;
    for (let i = 0; i < arr.length; i++){
        currSum += arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        }
    }
    console.log("maximum sum subarray:", maxSum);
    return;
}

maxSumSubArray([-5, 4, 6 - 3, 4, -1]);