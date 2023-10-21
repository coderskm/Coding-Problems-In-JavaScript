function strWithinStr(s1, s2) {
    if (s1.indexOf(s2) !== -1) {
        console.log(s2, "is within", s1);
    } else if (s2.indexOf(s1) !== -1) {
        console.log(s1, "is within", s2);
    } else {
        console.log("no string within another");
    }
}

strWithinStr( "codezinger","good");