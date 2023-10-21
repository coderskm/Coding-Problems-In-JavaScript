function countElement(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++){
        if ((sum - arr[i]) % arr[i] === 0) {
            count++;
        }
    }
    console.log("array elements that divide sum of all other elements:", count);
}

countElement([3, 10, 4, 6, 7]);