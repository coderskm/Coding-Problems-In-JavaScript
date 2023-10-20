function isAlphaOrNot(ch) {
    if (ch.length !== 1) console.log("enter valid character");
    let value = ch.charCodeAt(0);
    if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122)) {
        console.log(ch, "is alphabet");
    } else {
        console.log(ch, "is not alphabet");
        
    }
}

isAlphaOrNot("/")