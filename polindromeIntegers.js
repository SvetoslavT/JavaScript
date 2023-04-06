function polindromeIntegers(numToCheck) {
    let strNum = numToCheck.toString();
    let splitNum = strNum.split("");
    let reversedArray = splitNum.reverse();
    let joinArray = reversedArray.join("");
    if (joinArray === strNum) { console.log("True")}
    else {console.log("False")}
}
polindromeIntegers(123);
polindromeIntegers(12321412321);