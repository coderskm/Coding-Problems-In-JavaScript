function printNum(N) {
  if (N > 0) {
    console.log(N);
    printNum(N - 1);
  }
}

printNum(7);
