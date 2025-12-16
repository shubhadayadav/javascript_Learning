const prompt = require("prompt-sync")();

//1. is Eligible for voting or not
let age = 5;
let citizen = true;
let registeredToVote = false;

if (age >= 18 && citizen == true && registeredToVote == true) {
  console.log("you are eligible to vote");
  //18 year or older , a citizen , registerd to vote
} else if (age >= 18 && citizen !== true) {
  console.log("not able due to citizenship status");
  // 18 year or older, but not citizenship.
} else if (age >= 18 && registeredToVote !== true) {
  console.log("you are not eligible due to registration ");
  //not registered to vote.
} else if (age < 18) {
  console.log("you are not eligible to vote"); // below 18 .
} else {
  console.log("Error");
}

//2. for Result score
let score = prompt("Enter the marks:");
// if (score >= 40) {
//   if (score >= 70) {
//     if (score >= 90) {
//       console.log("ypu get distinction");
//     } else {
//       console.log("you get first class");
//     }
//   } else {
//     console.log("you are pass");
//   }
// } else {
//   console.log("you are failed");
// }

//Using Ternory operator
let marks = score >= 40 ? "You are pass" : "you are failed";
console.log(marks);

//3. check if number is even or odd
let checknumber = 15;
checknumber % 2 === 0
  ? console.log(" Numberis Even")
  : console.log("Number is odd ");

//4. check if number is positive, negetive oe zero
let statusNumber = parseInt(-12);
if (statusNumber >= 0) {
  if (statusNumber === 0) {
    console.log("number is zero");
  } else {
    console.log("positive");
  }
} else {
  console.log("Number is negetive");
}

//5. Number is float or Integer
const num = Number(prompt("Enter a number: "));
// console.log(typeof num);

// console.log(Number.isInteger(num));
if (Number.isInteger(num)) {
  console.log("Number is Integer");
} else {
  console.log("Number is Float");
}
