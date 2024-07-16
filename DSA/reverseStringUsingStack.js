let reverseString = (str) => {

    let stack = [];
    let string = str.split('')

    for (let i = 0; i < str.length; i++) {
        stack.push(string[i])
    }

    let reversedString = [];

    for (let i = 0; stack.length > 0; i++) {
        reversedString[i] = stack.pop();
    }

    return reversedString.join('');
}


// let reverseString = (str) => {
//     let stack = [];
//     let string = str.split('');

//     for (let i = 0; i < str.length; i++) {
//         stack.push(string[i]);
//     }

//     let reversedString = '';
//     while (stack.length > 0) {
//         reversedString += stack.pop();
//     }

//     return reversedString;
// }

let str = "Hello World!";

console.log("Original String: " + str);
console.log("Reversed String: " + reverseString(str));