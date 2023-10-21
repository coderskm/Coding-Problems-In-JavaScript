function absDifference(arr) {
    let difference = 0;
    
    difference = Math.abs(arr[0] - arr[arr.length - 1]);
    console.log("difference between first and last array elements:", difference);
    
}

absDifference([91, 23, 45, 11, 78]);