function arrPalindrome(arr) {
  let n = arr.length;
  let isPalindrome = true;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    console.log("given arr", arr, "is palindrome");
  } else {
    console.log("given arr", arr, "is not palindrome");
  }
}

arrPalindrome([1, 2, 1]);
