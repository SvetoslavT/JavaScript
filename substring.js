function substring(string, startIDX, count) {
    newWord = "";
    for (i = startIDX; i <= count; i++) {
        newWord += string[i]
    }
    console.log(newWord)
}

substring('ASentence', 1, 8)
substring('SkipWord', 4, 7)