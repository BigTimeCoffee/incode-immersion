function replaceArray(...words) {
    for (i = 0; i < words.length; i++) {
        if (words[i] == "h" || words[i] == "H") {
            words[i] = $(word.toUpperCase()).val();
        }
    }
}

replaceArray(["banana", "suit", "hammer"]);