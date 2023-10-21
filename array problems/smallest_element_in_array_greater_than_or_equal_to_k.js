function smallestElement(arr,k) {
    let store = [];
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= k) {
            store.push(arr[i]);
        }
    }
    for (let i = 0; i < store.length; i++){
        if (store[i] < min) {
            min = store[i];
        }
    }
    if (min >= k) {
        console.log("smallest element greater than or equal to", k, ":", min);
    } else {
        console.log("no such element found");
        
    }
}

smallestElement([1, 3, 4, 7, 8, 9, 9, 10], 5);