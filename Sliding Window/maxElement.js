
let maxElement = (arr, k) => {
    let i = 0, j = 0;
    let result = [];
    let maxElement = [];

    while (j < arr.length) {
        while (maxElement[maxElement.length - 1] < arr[j]) {
            maxElement.pop();
        }
        maxElement.push(arr[j]);

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            result.push(maxElement[0]);

            if (arr[i] === maxElement[0]) {
                maxElement.shift();
            }
            i++;
            j++;
        }
    }
    return result;
}

console.log(maxElement([12, 1, 78, 90, 57, 89, 56], 3)); // [78, 90, 90, 90, 89]
console.log('--------------------------------------');
console.log(maxElement([12, 1, 78, 90, 57, 89, 56], 4)); // [90, 90, 90, 89]
console.log('--------------------------------------');
console.log(maxElement([12, 1, 78, 90, 57, 89, 56], 5)); // [90, 90, 90]