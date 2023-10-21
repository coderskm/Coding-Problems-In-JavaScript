function largestGap(arr) {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let gap = Math.abs(max - min);
    console.log("largest gap:", gap);
}

largestGap([3,6,7,10])