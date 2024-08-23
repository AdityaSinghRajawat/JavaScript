
let maxSum = (arr, k) => {
    let i = 0, j = 0;
    let sum = 0;
    let maxSum = 0;

    while (j < arr.length) {
        sum += arr[j];

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }

    return maxSum;
}

console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 24
console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // 30
console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 35
