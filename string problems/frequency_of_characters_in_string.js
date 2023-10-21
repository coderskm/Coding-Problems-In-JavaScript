function strFreq(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++){
        if (str[i].trim() === "") {
            continue;
        } else if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
            
        }
    }
    console.log("frequency of characters in", str, "is:", obj);
}

strFreq("sumit kumar mishra");