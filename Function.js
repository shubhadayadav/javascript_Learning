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

(function(name) {
    let result = "Hello " + name;
    document.getElementById("firstJs").innerHTML = result;
})("john");