function containsTwoNumbers(str) {
    const regex = /\d/g;
    const matches = str.match(regex);
    return matches && matches.length >= 2;
  }
function passwordValidator(password) {

    let validators = ["length", "lettersAndDigits", "numDigits"];

    if (password.length >= 6 && password.length <= 10) {validators.splice(0, 1)}
    else {console.log("Password must be between 6 and 10 characters")}

    if (Boolean(password.match(/^[A-Za-z0-9]*$/))) {validators.splice(0, 1)}
    else {console.log("Password must consist only of letters and digits")}

    const numbersCount = new RegExp("(\D*\d){2,}")

    if (containsTwoNumbers(password)) {validators.splice(0, 1)}
    else {console.log("Password must have at least 2 digits")}

    if  (validators.length === 0) {console.log("Password is valid")}
}

passwordValidator('logIn')