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

let dietPlan = prompt("Enter the Day :");

switch (dietPlan) {
  case "monday":
    console.log(
      "Breakfast:  2 Moong Dal Chillas with Mint Chutney\n Lunch: 1 Roti, Mixed Veg Curry, Sprout Salad\n Dinner: Clear Vegetable Soup, Grilled Paneer(100 g)"
    );
    break;
  case "tuesday":
    console.log(
      " Breakfast: Scrambled Eggs with Spinach & 1 whole-grain toast\n Lunch: Chicken/Fish Curry with Brown Rice & Salad\n Dinner: Chicken Stew with Sautéed Spinach."
    );
    break;
  case "wednesday":
    console.log(
      "Breakfast: 1 Apple + 1 cup Watermelon (mid-morning)\n Lunch: Rajma Rice with Cucumber Salad\n Dinner: Paneer Tikka with Mixed Veggies."
    );
    break;
  case "thursday":
    console.log(
      " Breakfast: Veggie Stuffed Paratha with Curd\n Lunch: 1 Roti, Chana Masala, Salad\n Dinner: Moong Dal Soup + Grilled Chicken."
    );
    break;
  case "friday":
    console.log(
      " Smoothie (Banana, Spinach, Flaxseed, Almond Milk)\n Lunch: Grilled Fish with Sautéed Veggies\n Dinner: Chicken Biryani (light oil) + Salad."
    );
    break;
  case "saturday":
    console.log(
      " Breakfast: Omelet with Onion & Tomato\nLunch: Millet Roti, Mixed Veg Curry, Sprout Salad\n Dinner: Vegetable Soup + 1 Boiled Egg."
    );
    break;
  case "sunday":
    console.log(
      " Breakfast: 1 bowl Poha with peanuts & lemon\n Lunch: Leftover Chicken/Veg Curry with Roti/Rice\n Dinner: Chicken/Fish Tikka with Sautéed Veggies."
    );
    break;
  default:
    console.log(" not match");

    break;
}
