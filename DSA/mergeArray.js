let mergeArray = (arr1, arr2) => {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i];
    }

    for (i = 0; i < arr1.length; i++) {
        result[arr1.length + i] = arr2[i];
    }

    return result;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log("Array 1: " + arr1);
console.log("Array 2: " + arr2);

let mergedArr = mergeArray(arr1, arr2);

console.log("Merged Array: " + mergedArr);