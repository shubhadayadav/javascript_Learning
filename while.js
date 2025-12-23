const prompt = require("prompt-sync")();

//Table Of 5
let tableNumnum = 1;
do {
    console.log(tableNumnum * 5);
    tableNumnum++;
} while (tableNumnum <= 10);

//4. number guessing game
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess !== secretNumber) {
        console.log("Wrong guess! Try again.");
    }
} while (guess !== secretNumber);

console.log("you guessed correct number");

//5. Sum of Positive Numbers

let Positive = 0;
let Input = 0;
do {
    Positive += userInput;
    Input = Number(prompt("Enter the Number :"));
} while (Input >= 0);
console.log(sum);

// Q. calculate the sum of the first N natural numbers using a while loop.

let Nsum = 0,
    ini = 1;
let N = Number(prompt("Enter the n number: "));
while (ini <= N) {
    Nsum += ini;
    ini++;
}
console.log(Nsum);

// let natural;
// let sum = 0,
//     i;
// do {
//     natural = Number(prompt("Enter a N number :"));
//     for (let i = 1; i <= natural; i++) {
//         sum += i;
//     }
// } while (i <= natural);
// console.log(sum);

//Q.Factorial of a Number Using While Loop in JavaScript

let mutiplication = 1;

let factorialNum = Number(prompt("Enter A number :"));
console.log(factorialNum);

while (factorialNum > 0) {
    mutiplication *= factorialNum;
    factorialNum--;
}
console.log(` Factrorial of ${factorialNum} Number is ${mutiplication}`);

//Q.Fibonacci Number

let a = 0,
    b = 1,
    counter = 1;
let Fibsum;

let FiboNum = Number(prompt("Enter a number :"));
console.log(a);
console.log(b);
while (counter < FiboNum) {
    Fibsum = a + b;
    a = b;
    b = Fibsum;
    counter++;
}
console.log(a);

//Q Validating User input with Do while Loop

let userInput;
do {
    userInput = Number(prompt("enter a number :"));
    if (!isNaN(userInput) && userInput > 0) {
        console.log(`${userInput} valid number `);
    }
} while (userInput > 0); {
    console.log("Invalid Number , Please Enter Valid Number :");
}

//sum of Natural number using For Loop

let i;
let sum = 0;

let Naturalnum = Number(prompt("Enter a Natural Number :"));
for (i = 1; i <= Naturalnum; i++) {
    sum += i;
    console.log(`${sum} `);
}

//Q. Generating a time table of 5 with For Loop

let tableNum = Number(prompt("Table of :"));
let num, total;
for (num = 1; num <= 10; num++) {
    total = tableNum * num;
    console.log(`${tableNum} * ${num}= ${total}`);
}

//Q. checking leap year
let Year = Number(prompt("Enter a Year :"));

if (Year % 400 == 0) {
    console.log(`${Year} is a leap year`);
} else {
    console.log(`${Year} is not a leap year`);
}

//Q.Printing star pattern

for (let i = 1; i <= 5; i++) {
    let pattern = ""; //taking as a string
    for (let j = 1; j <= i; j++) {
        pattern = pattern + " " + j;
    }
    console.log(pattern);
}

for (i = 1; i <= 5; i++) {
    let sum = " "; // it's a temprory string  , for current row
    for (j = 1; j <= i; j++) {
        sum += "*";
    }
    console.log(sum);
}

// console.log("**" + "*");