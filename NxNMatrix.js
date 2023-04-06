function printSqareMatrix(size) {
    let sizeStr = size.toString();
    let rowStr = sizeStr.repeat(size + " ");
    let row = rowStr.split("");

    for (x = 0; x <= size - 1; x++) {
        console.log(row);
    }
}
printSqareMatrix(5);