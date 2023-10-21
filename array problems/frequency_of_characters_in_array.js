function arrFreq(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        if (arr[i].trim() === "") {
            continue;
        } else if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
            
        }
    }
    console.log("frequency of characters in", arr, "is:", obj);
}

arrFreq(["t", "e", "s", "t", ""]);