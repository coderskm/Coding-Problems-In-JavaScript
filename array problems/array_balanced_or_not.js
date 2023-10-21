function balancedOrNot(arr) {
    let len = 0;
    if (arr.length%2 !== 0) {
        len = Math.ceil(arr.length / 2);
    } else {
        len = arr.length / 2;
    }

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < len; i++){
        sum1 += arr[i];
    }
    for (let i = len; i < arr.length; i++){
        sum2 += arr[i];
    }
    if (sum1 === sum2) {
        console.log("Array is balanced");
    } else {
        console.log("Array is not balanced");
    }
}

balancedOrNot([1,3,1,1,4,2,1])