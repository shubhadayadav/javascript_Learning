const prompt = require("prompt-sync")();

// 1. calculate area of given shapes

let areaOfShapes = prompt("Enter the name of shapes : ");
console.log(typeof areaOfShapes);

switch (areaOfShapes) {
  case "circle":
    let radius = prompt("Enter the radius of cirle : ");
    let A = 3.142 * radius * radius;
    console.log(`Area of circle is ${A.toFixed(1)}`);
    break;

  case "rectangle":
    let width = prompt("Enter the width of rectangle : ");
    let height = prompt("Enter the height of Rectangle : ");
    let Area = width * height;
    console.log(`Area of rectangle is ${Area}`);
    break;

  case "suare":
    let side = prompt("Enter the side : ");
    let AreaOfsuare = side * side;
    console.log(`Area of Suare is ${AreaOfsuare}`);
    break;

  default:
    console.log("Not match ");

    break;
}

//2.traffic light

let trafficLight = "yellow";

switch (trafficLight) {
  case "red":
    console.log("stop");
    break;

  case "yellow":
    console.log("preparre to stop");
    break;

  case "green":
    console.log("go");
    break;

  default:
    console.log("Invalid Traffic light");

    break;
}

//3. take 2 input from user and do arithmatic operation.

let a = Number(prompt("Enter a number :"));
let b = Number(prompt("Enter a number :"));
let result;
let arithMatic = prompt("Enter a operator : ");
// console.log(typeof a);

switch (arithMatic) {
  case "+":
    result = a + b;
    console.log(`${a} + ${b} = ${result}`);
    break;

  case "-":
    result = a - b;
    console.log(`${a} - ${b} = ${result}`);
    break;
  case "*":
    result = a * b;
    console.log(`${a} * ${b} = ${result}`);
    break;
  case "/":
    result = a / b;
    console.log(`${a} / ${b} = ${result}`);
    break;

  default:
    console.log("Invalid operator");

    break;
}
