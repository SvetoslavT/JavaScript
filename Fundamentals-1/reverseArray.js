function reveseArray (number, array){
    let newArray = []
    for (let index = 0; index < number; index++) {
        newArray.push(array[index])     
    }
    console.log(newArray.reverse().join(" "))
}
reveseArray(3, [10, 20, 30, 40, 50])
reveseArray(4, [-1, 20, 99, 5])
reveseArray(2, [66, 43, 75, 89, 47])