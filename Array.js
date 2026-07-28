// const isReverse = (char) => {
//   let printChar = "";
//   for (let i = char.length - 1; i >= 0; i--) {
//     // printChar = i;
//     printChar += char[i];
//   }
//   // console.log(printChar.length);
//   console.log(char.length);
//   console.log(printChar.length);

//   return char == printChar ? true : false;
// };

// console.log(isReverse("Hello World"));
// console.log(isReverse("MADAM"));

// const reverseName = (Uname) => {
//   let fullName = "";
//   for (let i = Uname.length - 1; i >= 0; i--) {
//     fullName += Uname[i];
//   }
//   //   return fullName;

//   // Here We can check Palindrome

//   return Uname === fullName ? true : false;
// };

// console.log(reverseName("radar"));

// let person = ["shubhada", "Amit", "Urmila", "Apple", " Banana", " Grapes"];

// console.log(person[3]);
//How to Get reverse Array ?
// console.log(person.at(-4));

// let lastChar = person[person.length - 2];
// console.log(lastChar);

// How  we can Modify Existing Array
// person[5] = "mango";
// person[3] = "12457";
// console.log(person);

// console.log(typeof person);

// console.log(person[2]);

// for (const persons of person) {
//   console.log(persons);
// }

let Cars = ["BMW", "Mercedes", "VW", "TaTa", "porsche"];

//Accessing Array using Function

// let allPerson = (person) => {
//   let element = " ";
//   for (let index = 0; index <= person.length - 1; index++) {
//     element += person[index];
//   }
//   return element;
// };
// console.log(allPerson(Cars));

//Accessing Cars Or Any Array,  using for Loop
// for (let i = 0; i <= person.length - 1; i++) {
//   console.log(person[i]);
// }

// for (let nameofCars of Cars) {
//   console.log(nameofCars);
// }

// for (let allcars in Cars) {
//   console.log(allcars);
// }

// let myFruit = (fruitName) => {
//   return ` I Eat ${fruitName}`;
// };

// console.log(myFruit("apple"));

// function myFruit1(fruitName1) {
//   return ` I Eat ${fruitName1}`;
// }

// console.log(myFruit1("apple"));

//FOREACH LOOP START FROM HERE

// let person2 = ["ram", "sunita", "prince", "I-An", "wamiqa"];

// let allPerson2 = person2.forEach((element) => {
//   console.log(`My Name is ${element}`);
// });

// console.log(allPerson2);

// let mapPerson = person2.map((element1) => {
//   return ` ${element1} is a Good `;
// });
// console.log(mapPerson);

// let allnum = [7, 2, 5, 8, 4, 9];

// let Eachnum = allnum.forEach((numEle) => {
//   console.log(`${numEle}` * 2);
// });
// console.log(Eachnum);

// let Mapnum = allnum.map((mapEle) => {
//   return `${mapEle}  ` * 2;
// });
// console.log(Mapnum);

// allnum[5] = 15;

// console.log(allnum);

const allFruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grape",
    "Strawberry",
    "Pineapple",
];

// for (const curFruit of allFruits) {
//   console.log(curFruit);
// }

// let fruitName = allFruits.forEach((currentval, ind) => {
//   console.log(`  ${currentval} ${ind}`);
// });

// console.log(fruitName);

// let fruitName2 = allFruits.map((currentvalue) => {
//   return ` My Fruit ${currentvalue} `;
// });

// console.log(fruitName2);

// allFruits[5] = "kiwi";
// console.log(allFruits);

//CRUD method start from here
//1. how to add and remove elements in the array

//  at the end
//  {i)add new elements Push() Method.
//   ii)remove elements pop()method } ,
//  at the beginning
//  {iii) add element unshift()
// iv)  remove element shift()}

// allFruits.push("guava", "watermelon", "carrot");
// console.log(allFruits);
// console.log(allFruits.push()); //IN push method Push return Length

// allFruits.pop();
// console.log(removeFruit);
// console.log(allFruits.pop());

// allFruits.unshift("potato", "tomato");
// console.log(allFruits);
// console.log(allFruits.unshift());

// console.log(allFruits.shift());

//2. how to  add/replace or delete element in array (the middle element)
// splice() method

// const allFruits1 = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Mango",
//   "Grape",
//   "Strawberry",
//   "Pineapple",
// ];

// //splice(starting index number,delete count , add new 1, add new 2 ,...)
//splice method Return An Empty Array []

// allFruits1.splice(2, 3, "kiwi", "carrot", "potato", "tomato");
// console.log(allFruits1);

// allFruits1.splice(4, 1);
// console.log(allFruits1);
// console.log(allFruits1.splice());

// const position = 2;
// getItem([1, 2, 4, 1], position);

// write a program every element multiply with 2

let multi = [1, 2, 3, 5, 6, 7];

let totalOfMultiplication = multi.forEach((currval) => {
    console.log(currval * 2);
    // perform an action on each element of existing array and modify the existing array
});

console.log(totalOfMultiplication);

let totalMap = multi.map((curval) => {
    return curval * 3;
    // create a new array with modification on existing array (not change existing array)
});
console.log(totalMap);

// Doing CRUD operations on array

let colors = ["Red", "Yellow", "pink", "purple", "Green", "white"];

// ADD ELEMENTS END OF THE ARRAY USING PUSH METHOD
let addColors = colors.push("INDIGO");
This is the method 1 or
console.log(addColors);
console.log(colors);

console.log(colors.push("Violet", "Indigo", "Mango"));
//  this is the method 2
console.log(colors);

// REMOVE LAST ELEMENT OF AN ARRAY USING POP METHOD

console.log(colors.pop());
console.log(colors);

// ADDING NEW ELEMENT BEGINNING OF AN ARRAY

// IMP** unshift and push method returns ARRAY'S NEW LENGTH
// and SHIFT ,POP METHOD REMOVE ELEMENTS AND RETURNS VALUE WHICH ELEMENT THEY REMOVE

console.log(colors.unshift("Apple", "watermelon", "Tomato"));
console.log(colors);

// console.log(colors.shift());
// console.log(colors);

// ** **  CREATE : PUSH AND UNSHIFT METHOD
// UPDATE : SPLICE METHOD
// DELETE : SHIFT AND POP METHOD