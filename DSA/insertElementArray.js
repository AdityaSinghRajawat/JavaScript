let insertElement = (arr, element, positon) => {
    for (let i = arr.length - 1; i >= positon; i--) {
        arr[i + 1] = arr[i];

        if (i == positon) {
            arr[positon] = element;
        }
    }

    return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8]
element = 7
position = 3

console.log("Array before insertion: " + arr);
console.log("Array after insertion: " + insertElement(arr, element, position));


