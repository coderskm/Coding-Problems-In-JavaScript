function twoStringsAreRotation(s1, s2) {
     s1 = s1.toLowerCase();
     s2 = s2.toLowerCase();
    if (s1.length === s2.length && (s1 + s2).indexOf(s2) !== -1) {
        console.log(s1, "and", s2, "are rotation of each other");
    } else {
        console.log(s1, "and", s2, "are not rotation of each other");
        
    }
}

twoStringsAreRotation("codezinger", "kg");
twoStringsAreRotation("abcd", "cdab");