function arrReverse(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log(arr);
}

arrReverse([1, 2, 3, 4, 5]);
