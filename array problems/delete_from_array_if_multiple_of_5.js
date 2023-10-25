function deleteIfMutltipleOf5(arr) {
    console.log("original array:", arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 5 === 0) {
            arr[i] = arr[i + 1];
        }
    }
    console.log(arr);
}

deleteIfMutltipleOf5([12, 5, 67, 65, 55, 43, 10, 37, 105]);