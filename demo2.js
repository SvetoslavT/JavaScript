function sayHello() { return 'Hello';}

let firstName = "Svetoslav";
const greet = function (greeting, name) {
    console.log(greeting() + ' ' + name);
}

greet(sayHello, firstName);

console.log('------------------------------------------------------------');

function greeting() {
    return function () {console.log("Hello");}
}
console.log(greeting());