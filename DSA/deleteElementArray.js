let deleteElement = (arr, positon) => {
    for (let i = positon; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;

    return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8]
position = 3

console.log("Array before deletion: " + arr);
console.log("Array after deletion: " + deleteElement(arr, position));
