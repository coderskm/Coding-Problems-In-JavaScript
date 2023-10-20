function swapStr(s1, s2) {
    console.log("before swapping :-", "s1=", s1, "s2=", s2);
    [s1, s2] = [s2, s1];
    console.log("after swapping :-", "s1=", s1, "s2=", s2);

}

swapStr("hello", "all");