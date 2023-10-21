function hiddenNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum % arr.length !== 0) {
    console.log("no hidden number found for array:", arr);
    return;
  }
  let hiddenNum = sum / arr.length;
  console.log("hidden number for array", arr, "is:", hiddenNum);
}

hiddenNumber([1, 2, 1, 3]);
