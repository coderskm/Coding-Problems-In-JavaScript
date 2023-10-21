function closestOccurrencesDistance(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    let indexArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === min) indexArr.push(i);
    }

    if (indexArr.length === 1) {
        console.log("minimum element", min, "occurs only once");
        return;
    }

    let minDistance = Number.MAX_VALUE;
    for (let i = 0; i < indexArr.length; i++){
        if (indexArr[i + 1] - indexArr[i] < minDistance) {
            minDistance = indexArr[i + 1] - indexArr[i];
        }
    }

    console.log("distance between two closest occurrences of smallest element:", minDistance);
}

closestOccurrencesDistance([5, 1, 2, 3, 4, 1, 2, 1]);