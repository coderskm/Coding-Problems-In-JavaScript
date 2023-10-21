function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === x) {
            console.log(`${x} is present in given array at index ${i}`);
            return;
        }
    }
    console.log(`${x} is not present in given array`);
}

linearSearch([132, 54, 67, 342, 9, 142], 9);
linearSearch([132, 54, 67, 342, 9, 142], 19);