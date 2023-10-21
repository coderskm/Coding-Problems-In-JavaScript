function replacement(arr) {
    console.log("original array:-", arr);

    for (let i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = -1;
    console.log("array after replacing with previous element:-", arr);
}

replacement([32, 54, 56, 12]);