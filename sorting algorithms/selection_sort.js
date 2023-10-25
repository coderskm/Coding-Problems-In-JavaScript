function selectionSort(arr, order) {
    let n = arr.length;
    if (order === 0) {
         for (let i = 0; i < n - 1; i++) {
           let min = i;
           for (let j = i + 1; j < n; j++) {
             if (arr[min] > arr[j]) {
               min = j;
             }
           }
           if (min != i) {
             [arr[min], arr[i]] = [arr[i], arr[min]];
           }
        }
        console.log("selection sort ascending:", arr);
        return;
    }
    if (order === 1) {
      for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
          if (arr[min] < arr[j]) {
            min = j;
          }
        }
        if (min != i) {
          [arr[min], arr[i]] = [arr[i], arr[min]];
        }
      }
      console.log("selection sort descending:", arr);
      return;
    }
}

selectionSort([4, 3, 6, 8, 9, 1, 5, 2, 7],1);
selectionSort([4, 3, 6, 8, 9, 1, 5, 2, 7],0);