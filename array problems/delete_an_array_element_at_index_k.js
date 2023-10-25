function deleteAtArrIndex(arr, k) {
    console.log("original array:", arr);
    
    for (let i = k; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length-1;
    
    console.log("array after deleting element at index", k, ":", arr);
}

deleteAtArrIndex([10, 20, 30, 40, 50], 1);