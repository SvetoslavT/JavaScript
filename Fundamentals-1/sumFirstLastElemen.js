function solve (array) {
    let firstNumber = array[0]; 
    let lastNumber = array[array.length - 1]
    let result = firstNumber + lastNumber;
    return result
}
console.log(solve([20, 30, 40]))
console.log(solve([10, 17, 22, 33]))
console.log(solve([11, 58, 69]))
