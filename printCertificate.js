function printCertificate(grade, arrayNames) {
    let firstName = arrayNames[0];
    let lastName = arrayNames[1];
    if (grade < 3) {console.log('Student does not qualify')}
    else {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
        console.log(`${firstName} ${lastName}`)
        showGrade(grade)
    }
}

function showGrade(grade) {
    if (grade < 3.00) {console.log(`Fail (2)`);}
    else if (grade >= 3 && grade < 3.50) {console.log(`Poor (${formattedToSecondDecimalPrint(grade)})`);}
    else if (grade >= 3.50 && grade < 4.50) {console.log(`Good (${formattedToSecondDecimalPrint(grade)})`);}
    else if (grade >= 4.50 && grade < 5.50) {console.log(`Very good (${formattedToSecondDecimalPrint(grade)})`);}
    else {console.log(`Excellent ${formattedToSecondDecimalPrint(grade)}`)}
}
function formattedToSecondDecimalPrint(grade) {
    return grade.toFixed(2);
}


printCertificate(5.25, ['Peter', 'Carter']);
