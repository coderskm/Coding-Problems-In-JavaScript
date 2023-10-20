function greaterOfTwo(n1, n2) {
    if (n1 > n2) {
      console.log(n1, "is greater than", n2);
    } else if (n1 < n2) {
      console.log(n2, "is greater than", n1);
    } else {
        console.log(n1, "and", n2, "are equal");
    }
}


greaterOfTwo(2, 21);