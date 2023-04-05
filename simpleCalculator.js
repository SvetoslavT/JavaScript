function calculate(firstNum, secondNum, operation) {
    validOperations = ['multiply', 'divide', 'add', 'subtract'];
    if (validOperations.includes(operation) === false){return "Invalid operation"}
    switch (operation) {
        case 'multiply':
            let resultMultiply = (first, second) => first * second;
            console.log(resultMultiply(firstNum, secondNum));
            break
        case 'divide':
            let resultDevision = (first, second) => first / second;
            console.log(resultDevision(firstNum, secondNum));
            break
        case 'add':
            let resultAdd = (first, second) => first + second;
            console.log(resultAdd(firstNum, secondNum));
            break
        case 'subtract':
            let resultSubtrack = (first, second) => first - second;
            console.log(resultSubtrack(firstNum, secondNum));
            break
}
}
calculate(5, 10, 'multiply')
calculate(5, 10, 'subtract')
calculate(5, 10, 'add')
calculate(10, 10, 'divide')