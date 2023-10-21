function checkIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i + 1]) {
            console.log(str, "is not an isogram");
            return;
        }
    }
    console.log(str, "is isogram");
}

checkIsogram("string");
checkIsogram("geek");