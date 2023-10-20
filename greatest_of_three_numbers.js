function greaterOfThree(n1, n2,n3) {
  if (n1 > n2 && n1>n3) {
    console.log(n1, "is greater than", n2, "and ",n3);
  } else if (n2 > n1 && n2>n3) {
    console.log(n2, "is greater than", n1, "and ", n3);
  } else if (n3 > n1 && n3 > n2) {
    console.log(n3, "is greater than", n1, "and ", n2);
  } else {
      console.log(n1, n2, n3, "are equal");
  }
}

greaterOfThree(3, 3,3);
