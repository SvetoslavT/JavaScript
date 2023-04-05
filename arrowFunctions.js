let nmb = x => x**x;
console.log(nmb(2));

let caclulate = (num1, num2) => num1 + num2;
console.log(caclulate(5, 23))

// Importance of splitting larger chuncks of code to smaller once is to improve the readability and debugging later on

function printHTML(pageHeader, pageBody, pageFooter) {
    pageHeader();
    pageBody();
    pageFooter();
}

