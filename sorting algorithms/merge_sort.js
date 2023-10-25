
function mergeSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr;
    let middle = Math.floor(n / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    let final = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        final.push(left[i]);
        i++;
      } else {
        final.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      final.push(left[i]);
      i++;
    }
    while (j < right.length) {
      final.push(right[j]);
      j++;
    }

    return final;
  }





console.log(mergeSort([4, 3, 6, 8, 9, 1, 5, 2, 7]));
