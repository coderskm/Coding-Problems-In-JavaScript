function targetIndex(arr, target) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            console.log(target, "index is:", i);
            return;
        }
    }
    console.log(target, "is not present in given array");
}

targetIndex([1, 4, 3, 5, 2], 51);