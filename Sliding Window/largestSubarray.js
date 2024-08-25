
let largestSubarray = (arr, target) => {

    let i = 0, j = 0;
    let sum = 0;
    let max = 0;

    while (j < arr.length) {
        sum += arr[j];

        if (sum < target) {
            j++;
        } else if (sum === target) {
            max = Math.max(max, j - i + 1);
            j++;
        } else {
            while (sum > target) {
                sum -= arr[i];
                i++;
                if (sum === target) {
                    max = Math.max(max, j - i + 1);
                }
            }
            j++;
        }
    }
    return max;
}

console.log(largestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)); // 5
console.log(largestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9], 18)); // 4
console.log(largestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9], 25)); // 5