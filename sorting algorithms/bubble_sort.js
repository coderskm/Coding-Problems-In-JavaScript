function bubbleSort(arr, order) {
  let n = arr.length;

  if (order === 0) {
    for (let i = 0; i < n; i++) {
      let swap = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          swap = true;
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
      if (!swap) {
        break;
      }
    }
    console.log("sorting array in increasing order:", arr);
    return;
  }

  if (order === 1) {
    for (let i = n - 1; i >= 0; i--) {
      let swap = false;
      for (let j = n - 1; j > n - i - 1; j--) {
        if (arr[j - 1] < arr[j]) {
          swap = true;
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
      }
      if (!swap) {
        break;
      }
    }
    console.log("sorting array in decreasing order:", arr);
    return;
  }
}

bubbleSort([4, 3, 6, 8, 9, 1, 5, 2, 7], 1); 
bubbleSort([4, 3, 6, 8, 9, 1, 5, 2, 7], 0); 
