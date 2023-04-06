function caclulateSum(number) {
    let stringNumber = number.toString()
    let oddNum = 0;
    let evenNum = 0
    for (i = 0; i  <= stringNumber.length - 1; i++) {
        currentNum = Number(stringNumber[i])
        if (currentNum % 2 === 0) {evenNum += currentNum}
        else {oddNum += currentNum}
    }
    console.log(`Odd sum = ${oddNum}, Even sum = ${evenNum}`)
}

caclulateSum(1000435)
caclulateSum(3495892137259234)