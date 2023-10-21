function isSuffix(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    let suffix = true;
    if (len1 < len2) {
        for (let i = 0; i < len1; i++){
            if (s1[len1 - i - 1] !== s2[len2 - i - 1]) {
                suffix = false;
                break;
            }
        }
        if (suffix) {
            console.log(s1, "suffix of", s2);
        } else {
            console.log(s1, "not suffix of", s2);
        }
    } else {
        for (let i = 0; i < len2; i++) {
          if (s2[len2 - i - 1] !== s1[len1 - i - 1]) {
            suffix = false;
            break;
          }
        }
        if (suffix) {
          console.log(s2, "suffix of", s1);
        } else {
          console.log(s2, "not suffix of", s1);
        }
    }
    
}

isSuffix("donned","abandoned");