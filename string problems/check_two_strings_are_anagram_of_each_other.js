function anagramOrNot(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    if (s1.length !== s2.length) {
        console.log(s1, "and", s2, "are not anagram");
        return;
    }
    let obj1 = obj2 = {};
    for (let i = 0; i < s1.length; i++){
        if (s1[i] === " ") {
            continue;
        } else if (!obj1[s1[i]]) {
            obj1[s1[i]] = 1;
        } else if (obj1[s1[i]]) {
            obj1[s1[i]] += 1;    
        } else {
            continue;
        }
    }

    for (let i = 0; i < s2.length; i++) {
      if (s2[i] === " ") {
        continue;
      } else if (!obj2[s2[i]]) {
        obj2[s2[i]] = 1;
      } else if (obj2[s2[i]]) {
        obj2[s2[i]] += 1;
      } else {
        continue;
      }
    }

    for (let key in obj1) {
        if (obj1[key]!==obj2[key]) {
            console.log(s1, "and", s2, "are not anagram");
            return;
        }
    }
    console.log(s1, "and", s2, "are anagram");
}

anagramOrNot("gram", "arm");