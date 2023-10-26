function DNF(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0: {
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      }

      case 1: {
        mid++;
        break;
      }
      case 2: {
        [arr[high], arr[mid]] = [arr[mid], arr[high]];
        high--;
        break;
      }
    }
    }
    console.log("sorted array:", arr);
    return;
}

DNF([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);
