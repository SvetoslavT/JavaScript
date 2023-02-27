function largest(numberOne, numberTwo, numberThree) {
    let largestNumber = null
    if (numberOne > numberTwo && numberOne > numberThree) {
        largestNumber = numberOne
    } else if (numberTwo > numberOne && numberOne > numberThree) {
        largestNumber = numberTwo
    } else largestNumber = numberThree
    return `The largest number is ${largestNumber}.`
}
console.log(largest(5, -3, 16))
console.log(largest(-3, -5, -22.5))