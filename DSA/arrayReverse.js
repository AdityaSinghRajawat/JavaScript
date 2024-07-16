// let arrayReverse = (arr) => {
//     let start = 0, end = arr.length - 1, temp;

//     while (start < end) {
//         temp = arr[start];
//         arr[start] = arr[end]
//         arr[end] = temp;

//         start++;
//         end--;
//     }

//     return arr;
// }



// let arrayReverse = (arr) => {
//     let start = 0, end = arr.length - 1, temp;

//     for (start = 0; start < end - start; start++) {
//         temp = arr[start];
//         arr[start] = arr[end - start];
//         arr[end - start] = temp;
//     }

//     return arr;
// }



let arrayReverse = (arr, start = 0, end = arr.length - 1) => {

    if (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        arrayReverse(arr, start + 1, end - 1);
    }

    return arr;
}

let arr = [2, 3, 4, 5, 7, 8];

console.log("Original Array: ", arr);
console.log("Reversed Array: ", arrayReverse(arr));