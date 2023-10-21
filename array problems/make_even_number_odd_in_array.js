function makeEvenOdd(arr) {
    console.log("original array:", arr);

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            arr[i] += 1;
        }
    }
    console.log("array after making even number odd:", arr);
}


makeEvenOdd([45, 23, 12, 1, 6]);