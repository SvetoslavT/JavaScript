function calculatePrise(dayType, age) {
    if (dayType === "Weekday") {
        if (age >= 0 && age <= 18) {
            console.log("12$")
        }
        else if (age > 18 && age <= 64) {
            console.log("18$")
        }
        else if (age > 64 && age <= 122) {
            console.log("12$")
        }
        else console.log("Error!")
        }
    if (dayType === "Weekend") {
        if (age >= 0 && age <= 18) {
            console.log("15$")
        }
        else if (age > 18 && age <= 64) {
            console.log("20$")
        }
        else if (age > 64 && age <= 122) {
            console.log("15$")
        }
        else console.log("Error!")
        }
    if (dayType === "Holiday") {
        if (age >= 0 && age <= 18) {
            console.log("5$")
        }
        else if (age > 18 && age <= 64) {
            console.log("12$")
        }
        else if (age > 64 && age <= 122) {
            console.log("10$")
        }
        else console.log("Error!")
        }
    }

calculatePrise('Weekday', 42)
calculatePrise('Holiday', -12)
calculatePrise('Holiday', 15)