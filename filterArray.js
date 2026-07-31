let allMembers = [
  "Hari",
  "Urmila",
  "Rahul",
  "amit",
  "notebook",
  "tiffin",
  "Rahul",
  "lunch",
  "Rahul",
  "tiffin",
];

// Indexof Method
// console.log(allMembers.indexOf("tiffin"));
// it returns index number of given element
// and if not found -1 returns
console.log(allMembers.indexOf("Rahul"));
// console.log(allMembers.indexOf("Rahul"));
// console.log(allMembers.indexOf("Rahul", 5));

// Includes Method
// console.log(allMembers.includes("tiffin"));
// it retuns true if element present in the Array , else return False
// console.log(allMembers.includes("lunch"));

// lastIndexOf Method
// lastIndexOf Start counting from  Backwards
// it returns last index number where element found , if not found return -1
// console.log(allMembers.lastIndexOf("Rahul"));
// console.log(allMembers.lastIndexOf("Rahul", 7));
// console.log(allMembers.lastIndexOf("Rahul", allMembers.length));

// console.log(allMembers.lastIndexOf("tiffin", allMembers.length));
// console.log(allMembers.indexOf("tiffin"));
// console.log(allMembers.includes("tiffin", 6));

let Months = ["jan", "march", "june", "aug", "oct"];

// Add DEC at the end of the Array

// console.log(Months.push("Dec"));
// console.log(Months);

// Update march to March

// let updateMonth = Months.splice(1, 1, "March");
// console.log(updateMonth);
// console.log(Months);

// Delete aug from array

// console.log(Months.splice(3, 1));
// console.log(Months);

// find Method

// let getMembers = allMembers.find((curMem) => {
//   return curMem == "Rahul";
// });
let getMembers2 = allMembers.findIndex((curMem) => {
  return curMem == "notebook";
});
let getMembers3 = allMembers.findIndex((curMem) => {
  return curMem == "Rahul";
});

// console.log(getMembers);
console.log(getMembers3);

let myNumbers = [1, 25, 3, 4, 56, 6, 78, 9, 89, 45, 56, 78];

let findNumber = myNumbers.find((curNum) => curNum > 78);

let findNumberInd = myNumbers.findIndex((curNum) => curNum > 78);

let filterNums = myNumbers.filter((curNum) => curNum !== 78);

console.log(findNumber);
console.log(findNumberInd);
console.log(filterNums);

let filterMonth = Months.filter((curMonth) => {
  return curMonth !== "june";
});
console.log(filterMonth);

let newMonth = filterMonth.splice(filterMonth.length, 0, "Nov");

console.log(filterMonth);

// Write a Function using filter method that return an Array Containing only the product with a price  less than or equal to 500
let product = [
  { name: "Mobile", price: 800 },
  { name: "Laptop", price: 1200 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];

// this is simple way
// let newFilterProd = product.filter((curProd) => {
//   return curProd.price >= 800;
// });
// console.log(newFilterProd);
// console.log(product);

// this is using function
// let newFilterProd1 = (newPro) => {
//   let filProd = newPro.filter((curProd) => {
//     return curProd.price <= 200;
//   });
//   return filProd;
// };

// console.log(newFilterProd1(product));

let uniqueNUm = [1, 2, 3, 25, 6, 7, 5, 19, 8, 7, 9];

// let filNum = uniqueNUm.filter((curval, index, arr) => {
//   console.log(arr[index]);
//   console.log();
// });

// console.log(filNum);

// if condition is satisfy it return value in array , and if not satisfy the condition it returns  empty array

// console.log(
//   uniqueNUm.filter((curval2) => {
//     return curval2 < 15;
//   }),
// );

// How to Filter Unique Number
// let uniNum = uniqueNUm.filter((curval3, index, arr) => {
//     // return arr.indexOf(curval3) == index;
//     console.log(index);
//     console.log(arr.indexOf(curval3));
// });
// console.log(uniNum);

console.log(uniqueNUm.sort());

//For Ascending order
// console.log(
//   uniqueNUm.sort((a, b) => {
//     if (a > b) return 1; //switch the order (1)
//     if (b > a) return -1; //keep the track(-1)
//   }),
// );

//For Descending order just change 1 to -1
console.log(
  uniqueNUm.sort((a, b) => {
    if (a > b) return -1; //switch the order (1)
    if (b > a) return 1; //keep the track(-1)
  }),
);

// let names = [
//   "rbghav",
//   "rahul",
//   "dinesh",
//   "amit",
//   "kalpna",
//   "arjun",
//   "nakul",
//   "manas",
// ];

// console.log(names.sort());

// console.log(
//   names.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   }),
// );

const students = [
  { name: "Rahul", marks: 75 },
  { name: "Sneha", marks: 95 },
  { name: "Amit", marks: 60 },
];

// let a = students.name;
// console.log(a.sort());

// compare students marks using compare method
// console.log(
//   students.sort((a, b) => {
//     // console.log(a.marks);

//     if (a.marks > b.marks) return 1;
//     if (b.marks > a.marks) return -1;
//   }),
// );
console.log(
  students.sort((a, b) => {
    // console.log(a.marks);

    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
  }),
);

// Sort a name by alphabetical order using sort method
const names2 = ["Zeenat", "Amit", "Rahul", "Binay"];

console.log(names2.sort());

// write a map function each element with square if element is even or not
// let numsqre = [1, 2, 4, 5, 11, 6, 9];

let totalNumSquare = numsqre
  .map((num) => {
    // let result = " ";
    if (num % 2 == 0) {
      let result = num * num;
      return result;
    }
  })
  .filter((value) => {
    // console.log(value);

    return value !== undefined;
  });

console.log(totalNumSquare);

// write a program using map function sort name and add prefix " Mr" before every name
let names = [
  { name: "rbghav", gender: "male" },
  { name: "rahul", gender: "male" },
  { name: "dinesh", gender: "male" },
  { name: "amit", gender: "male" },
  { name: "kalpna", gender: "female" },
  { name: "arjun", gender: "male" },
  { name: "nakul", gender: "male" },
  { name: "manas", gender: "male" },
  { name: "maanasi", gender: "female" },
  { name: "shubhada", gender: "female" },
  { name: "taehyung", gender: "male" },
];

let sortName = names.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
});

let prename = names.map((newName) => {
  return newName.gender == "male"
    ? "  Mr." + newName.name
    : "Mrs." + newName.name;
});

console.log(prename);
