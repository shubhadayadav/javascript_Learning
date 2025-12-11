// tofixed() method (used in floating number operations)

let result = 2.14 + 4.56;
console.log(result.toFixed(3));

console.log("5" + 3);
console.log("hello" + 3);
console.log("5" + "3");

//write a programme to drive based on their age is greater than or equal to 18

let age = 5;
let drivingLicense = true;
// Using if-else
if (age >= 18 && drivingLicense === true) {
    console.log("you can drive");
} else {
    console.log("you can not drive");
}

// Using Ternary operator
age >= 18 && drivingLicense === true ?
    console.log("you can drive") :
    console.log("you can not drive");