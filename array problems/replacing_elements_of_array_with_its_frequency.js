function replaceWithFrequency(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        if (map.get(arr[i]) === null) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    for (let i = 0; i < arr.length; i++){
        
    }
}