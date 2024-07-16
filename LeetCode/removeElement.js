// var removeElement = function (nums, val) {
//     let result = nums.filter((num) => {
//         return num !== val;
//     })

//     return [result.length, result];
// };

// nums = [3, 2, 2, 3];
// val = 3;

// console.log(removeElement(nums, val));


var removeElement = function (nums, val) {

    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            j++;
        }
    }

    return j
};

nums = [0,1,2,2,3,0,4,2];
val = 2;

console.log(removeElement(nums, val));
console.log(nums);


// var removeElement = function(nums, val) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nums[i] = nums[j];
//             i++;
//         }
//     }
//     return i;
// };

// let nums = [3, 2, 2, 3];
// let val = 3;

// console.log(removeElement(nums, val));  // Output: 2
// console.log(nums);  // Output: [2, 2, 2, 3]