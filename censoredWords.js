function censor(text, wordToCensor) {
    const censor = "*".repeat(wordToCensor.length);
    const regex = new RegExp('\\b' + wordToCensor + '\\b', 'gi');
    const censored = text.replace(regex, censor);
    console.log(censored);
}
censor('A small sentence with some words', 'small')