function rotateArrayRight(arr, k) {
    console.log("original array:", arr);
    let n = arr.length;
    k = k % n;
    for (let i = 0, j = n - k - 1; i < j; i++, j--){
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    for (let i = n - k, j = n - 1; i < j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];   
    }
    for (let i = 0, j = n - 1; i < j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];   
        
    }
    console.log("rotated array to right:", arr);


}

rotateArrayRight([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3);