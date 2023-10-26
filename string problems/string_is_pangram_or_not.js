function pangramOrNot(sentence) {
    sentence = sentence.toLowerCase();
    let index = -1;
    let mark = new Array(26).fill(false);

    for (let i = 0; i < sentence.length; i++){
        if ('a' <= sentence[i] && sentence[i] <= 'z') {
            index = sentence.charCodeAt(i) - 'a'.charCodeAt(0);
        } else {
            continue;
        }
            mark[index] = true;
    }

    for (let i = 0; i < mark.length; i++){
        if (mark[i] === false) {
            console.log("given sentence is not pangram");
            return;
        }
    }
            console.log("given sentence is pangram");

}

pangramOrNot("the quick brown fox jumps over a lazy dog ");
pangramOrNot("today you win and tomorrow you lose");