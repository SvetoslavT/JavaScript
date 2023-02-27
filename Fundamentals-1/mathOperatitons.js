function calculate (firstNumber, secondNumber, operator){
    switch (operator) {
        case "+":
            console.log(firstNumber + secondNumber)
            break;
        case "-":
            console.log(firstNumber - secondNumber)
            break;
        case "*":
            console.log(firstNumber * secondNumber)
            break;
         case "/":
            console.log(firstNumber / secondNumber)
            break;
        case "%":
            console.log(firstNumber % secondNumber)
            break;
        case "**":
            console.log(firstNumber ** secondNumber)
            break;
        default:
            console.log("Invalid operator")
            break;
    }
}

calculate(1, 3, "*")
calculate(6, 10, "+")
calculate(3, 2, "%")
calculate(3, 2, "**")