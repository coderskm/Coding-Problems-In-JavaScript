function countPairs(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === i + j) {
                count++;
            }
        }
    }
    console.log(`total pairs satifying condition : ${count}`);
}

countPairs([8, 4, 2, 1, 5, 4, 2, 1, 2, 3]);