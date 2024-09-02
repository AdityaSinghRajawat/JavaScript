/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0; // No subarray can have a product less than 1 if k <= 1.

    let i = 0, j = 0;
    let product = 1;
    let count = 0;

    while (j < nums.length) {
        product *= nums[j];

        while (product >= k && i <= j) { // Adjust the window size if the product is too large
            product /= nums[i];
            i++;
        }

        // Count all subarrays ending at index `j` that have a product less than `k`
        count += (j - i + 1);

        j++;
    }

    return count;
};

// Test cases
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // Expected output: 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));        // Expected output: 0
console.log(numSubarrayProductLessThanK([1, 2, 3], 1));        // Expected output: 0
console.log(numSubarrayProductLessThanK([1, 2, 3], 2));        // Expected output: 2
console.log(numSubarrayProductLessThanK([1, 1, 1], 2));        // Expected output: 6
console.log(numSubarrayProductLessThanK([1, 2, 3, 4], 10));    // Expected output: 7
console.log(numSubarrayProductLessThanK([], 5));               // Expected output: 0
console.log(numSubarrayProductLessThanK([10, 9, 10, 5], 50));  // Expected output: 8
