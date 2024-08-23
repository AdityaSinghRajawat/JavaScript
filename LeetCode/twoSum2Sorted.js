/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    let left = 0, sum = 0;
    let right = numbers.length - 1;

    while (left < right) {
        sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};

let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target));