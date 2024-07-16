// let linearSearch = (arr, ele) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === ele) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [34, 32, 32, 32, 32, 32, 32, 32]
// let ele = 32;

// console.log("Element found at index: " + linearSearch(arr, ele));



let linearSearch = (arr, ele) => {

    let count = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            count++;
            result.push(i);
        }
    }
    return [result, count];
}

let arr = [34, 32, 32, 35, 35, 32, 32, 32]
let ele = 35;

console.log("Element found at index: " + linearSearch(arr, ele)[0]);
console.log("No of elements found: " + linearSearch(arr, ele)[1]);