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

showGrade(4)
showGrade(4.89)
showGrade(3.22)
showGrade(2.77)
