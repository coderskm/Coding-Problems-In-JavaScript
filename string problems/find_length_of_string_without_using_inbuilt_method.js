function findLength(str) {
    let len = 0;
    while (str[len] !== undefined) {
        len++;
    }
    console.log("length of", str, ":", len);
}

findLength("sumit kumar mishra");