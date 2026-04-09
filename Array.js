const isReverse = (char) => {
    let printChar = "";
    for (let i = char.length - 1; i >= 0; i--) {
        // printChar = i;
        printChar += char[i];
    }
    // console.log(printChar.length);
    console.log(char.length);
    console.log(printChar.length);

    return char == printChar ? true : false;
};

console.log(isReverse("Hello World"));
console.log(isReverse("MADAM"));