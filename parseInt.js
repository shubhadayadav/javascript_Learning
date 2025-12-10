// convert string to number

let myString = "12754";
// console.log(parseInt(myString));

let sum = parseInt(myString) + 10;
console.log(sum);

// console.log(typeof parseInt("124578"));

let myNum = "12.487";
let decimal = parseFloat(myNum) + 20; // Ans 32.487
let deciMal = parseInt(myNum) + 20; // Ans  32

console.log(decimal);
console.log(deciMal);

let myChar = "year2001";
let myChar1 = "-20478";
let myChar2 = "   254year";
console.log(parseInt(myChar)); //Ans  NaN
console.log(parseInt(myChar1));

console.log(parseInt(myChar2)); //Ans 254 omitted year   only accept number

console.log(typeof null);
