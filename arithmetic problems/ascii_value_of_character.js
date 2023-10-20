function findASCII(ch) {
    if (ch.length !== 1) console.log("enter valid character");
    let value = ch.charCodeAt(0);
    console.log("ASCII value of", ch, "is", value);
}

findASCII("a")