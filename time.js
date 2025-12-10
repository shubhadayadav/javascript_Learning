// document.getElementById("firstJs").innerHTML = "Hello from shubh";
// document.writeln("Hi this from shubhada yadav");
// console.log("Hello world");

// let myName = null;
// console.log(typeof myName);

// number to string
//string contains number,letters,character,symbol in double or single quote'', ""

let str = 25; //convert to string now

console.log(typeof String(str)); //using String constructor we can convert number to string

//string to number
let num = "123487";

console.log(typeof Number(num));

let myBirth = "10jul2001";
console.log(Number(myBirth));

let myNum = "  "; //if variable value is string or number or arrays or object , so variable has true value
if (myNum) {
    //here check if variable has value or not if yes then it will be true,,so here value        true                          check condition and execute next line of code
    console.log("this is my age");
} else {
    console.log(" im under 18");
}

let myName = "shubhada";
console.log(Boolean(myName));

let myNumber = 2562348;
console.log(Boolean(myNumber));

let myMovie = "";
console.log(Boolean(myMovie));

let myDate = -5;
console.log(Boolean(myDate));