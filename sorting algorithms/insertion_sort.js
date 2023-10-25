function insertionSort(arr, order) {
    let n = arr.length;
    if (order === 0) {
        for (let i = 1; i < n; i++){
            let temp = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
        console.log("insertion sort ascending:", arr);
    }
    if (order === 1) {
      for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < temp) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = temp;
      }
      console.log("insertion sort descending:", arr);
    }
}

insertionSort([4, 3, 6, 8, 9, 1, 5, 2, 7],1);
insertionSort([4, 3, 6, 8, 9, 1, 5, 2, 7],0);