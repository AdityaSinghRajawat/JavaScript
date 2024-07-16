let mergeArrayWhile = (arr1, arr2) => {

    let result = [];
    let i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result[k] = arr1[i];
            i++;

        } else {
            result[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        result[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        result[k] = arr2[j];
        j++;
        k++;
    }

    return result;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

console.log("Array 1: " + arr1);
console.log("Array 2: " + arr2);
console.log("Merged Array: " + mergeArrayWhile(arr1, arr2));