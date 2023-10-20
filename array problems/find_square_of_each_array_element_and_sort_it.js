function squareAndSortArr(arr) {
    console.log("original array :-",arr);

    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] ** 2; 
    }
    arr = arr.sort((a, b) => a - b);
    console.log("square and sorted array :-", arr);
}

squareAndSortArr([-4, -1, 0, 3, 10]);