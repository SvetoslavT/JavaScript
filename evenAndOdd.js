function evenAndOddDifference(arrayOfNumbers) {
    let evenSum = 0;
    let oddSum = 0;
    
    for (i = 0; i <= arrayOfNumbers.length - 1; i++) {
        if (arrayOfNumbers[i] % 2 == 0) {
            evenSum += arrayOfNumbers[i]
        }
        else {
            oddSum += arrayOfNumbers[i]
        }
    }
    console.log(evenSum - oddSum)
    
}
evenAndOddDifference([1,2,3,4,5,6])
evenAndOddDifference([3,5,7,9])
evenAndOddDifference([2,4,6,8,10])