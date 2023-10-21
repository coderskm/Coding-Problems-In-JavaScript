function displayProduct(arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++){
        prod *= arr[i];
    }
    console.log("product of all elements of", arr, "is:", prod);
}

displayProduct([1, 2, 3, 4, 5, 6]);