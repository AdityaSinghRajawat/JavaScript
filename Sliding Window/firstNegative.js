
let firstnegative = (arr, k) => {
    let i = 0, j = 0;
    let negative = [];

    while (j < arr.length) {
        if (arr[j] < 0) negative.push(arr[j]);

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            if (negative.length === 0) {
                console.log(0);  // No negative numbers in the window
            } else {
                console.log(negative[0]);  // Print the first negative number in the window
            }
            if (arr[i] === negative[0]) {
                negative.shift()
            }
            i++;
            j++;
        }
    }
}

firstnegative([12, -1, -7, 8, -15, 30, 16, 28], 3); // -1 -1 -7 -15 -15 0
console.log('--------------------------------------');
firstnegative([12, -1, -7, 8, -15, 30, 16, 28], 2); // -1 -1 -7 -15 -15
console.log('--------------------------------------');
firstnegative([12, -1, -7, 8, -15, 30, 16, 28], 4); // -1 -1 -7 -15 0