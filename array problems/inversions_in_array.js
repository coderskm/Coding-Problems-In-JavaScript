function countInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]) count++;
        }
    }
    console.log("total number of inversions in array:", count);
}

countInversions([2,4,1,3,5])