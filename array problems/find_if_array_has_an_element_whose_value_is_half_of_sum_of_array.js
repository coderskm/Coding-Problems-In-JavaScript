function findElement(arr) {
    let sum = 0;
    let element = -1;
    let found = false;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let value = Math.floor(sum / 2);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value) {
            element = arr[i];
            found = true;
            break;
        }
    }
    if (found) {
        console.log("element present:",element);
    } else {
        console.log("element not present");
        
    }
}

findElement([1,2,3,4])