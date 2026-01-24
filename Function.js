//Function of sum of Numbers
// let a, b, c;

// function sumofNumber(a, b, c) {
//   let Total = a + b;
//   Total += c;
//   return Total;
// }

// console.log(sumofNumber(25, 2.4578, 0));

// Greet Function

// let name = "";

// function greet(name) {
//   console.log(`Hello ${name} , Welcome to this Website`);
// }

// greet("sir");

// let anonew = (function (name) {
//   let result = "Hello " + name;
//   console.log(result);
//   return result; //whenever I call this function the result(output) will be return through return keyword to the where function called.
// })("shubhada");

// console.log(anonew);

// let num = 7;
// console.log(`${8 * num}`);

// function table(a, b = 5) {
//   for (let i = 1; i <= 10; i++) {
//     let printTable = a + b * i;
//     console.log(printTable);
//   }
// }

// console.log(table(7));

// let math = (a, b, c) => {
//   // c = " ";.
//   switch (c) {
//     case "+":
//       console.log(a + b);
//       break;
//     case "-":
//       console.log(a - b);
//       break;
//     case "*":
//       console.log(a * b);
//       break;
//     case "/":
//       console.log(a / b);
//       break;

//     default:
//       console.log("Not match");

//       break;
//   }
// };

// console.log(math(40, 75, "/"));

// let isReverse = (value) => {
//   let reverse = " ";
//   for (let char = value.length - 1; char >= 0; char--) {
//     console.log(char);
//     reverse += value[char];
//     console.log(reverse);

//     // console.log(value.length - 1); //string.length is always +1 of index number that why we use string.length-1 for reverse method
//   }
//   return reverse;

//   // console.log(value.length);
// };

// console.log(isReverse("Hello World"));

// let revString = (Name) => {
//     let output = " ";
//     for (i = Name.length - 1; i >= 0; i--) {
//         output += Name[i];
//     }
//     return output;
// };

// console.log(revString("Hello World It's Me"));

let isPalindrome = (str) => {
  let reverse = " ";
  for (char = str.length - 1; char >= 0; char--) {
    reverse += str[char];
    // return reverse;
  }
  //   return reverse;
  for (let i = 0; str == reverse; i++) {
    return console.log("palindrome");
  }

  // console.log(str, reverse);
};

console.log(isPalindrome("LEVEL"));
