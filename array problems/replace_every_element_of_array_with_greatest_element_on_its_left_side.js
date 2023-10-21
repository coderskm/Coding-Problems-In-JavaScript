function replaceWithGreatest(arr) {
    console.log("original array:-", arr);
    let max = arr[0];
    arr[0] = -1;
    for (let i = 1; i < arr.length; i++){
        if (max > arr[i]) {
            arr[i] = max;
        } else if (max <= arr[i]) {
            let temp = arr[i];
            arr[i] = max;
            max = temp;
        }
    }
    console.log("array after replacing with greatest element on its left side:-", arr);
}

replaceWithGreatest([4,5,2,1,7,6])