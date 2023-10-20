function reverseStr(str) {
    console.log("original string :-", str);
    let revStr = "";
    for (let i = str.length - 1; i >=0; i--){
        revStr += str[i]; 
    }
    console.log("reversed string :-", revStr);
}

reverseStr("string is awesome");