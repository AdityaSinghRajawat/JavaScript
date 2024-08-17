/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let i = 0, count = 0;
//     let arr = [];
//     let sel = nums[0];

//     while (i < nums.length) {

//         if (sel === nums[i]) {

//             if (count < 2) {
//                 arr.push(nums[i]);
//             }
//             count++;

//         } else {
//             sel = nums[i];
//             arr.push(nums[i]);
//             count = 1;
//         }
//         i++;
//     }
//     return arr.length;
// };

var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;

    let j = 2; // Start from the third position

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums)); // Output: 5

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums)); // Output: 7