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
// console.log(allMembers.indexOf("Rahul"));
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
// let getMembers2 = allMembers.findIndex((curMem) => {
//   return curMem == "notebook";
// });

// console.log(getMembers);
// console.log(getMembers2);

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
let newFilterProd = product.filter((curProd) => {
  return curProd.price >= 800;
});
// console.log(newFilterProd);
// console.log(product);

// this is using function
let newFilterProd1 = (newPro) => {
  let filProd = newPro.filter((curProd) => {
    return curProd.price <= 200;
  });
  return filProd;
};

console.log(newFilterProd1(product));
