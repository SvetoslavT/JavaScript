function calculateArea(radius) {
    if (typeof(radius) !== "number") {
        return `We can not calculate the circle area, because we receive a ${typeof(radius)}.`
    }
    area = Math.PI * Math.pow(radius, 2)
    return area.toFixed(2)
}
console.log(calculateArea(5))
console.log(calculateArea("name"))