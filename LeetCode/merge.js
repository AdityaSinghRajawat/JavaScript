// var merge = function (nums1, m, nums2, n) {
//     let mergedArray = [...nums1, ...nums2];
//     result = mergedArray.sort((a, b) => a - b);

//     res = result.filter((num) => num != 0)

//     return res;
// };

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = nums1.length;
// let nums2 = [2, 5, 6];
// let n = nums2.length;

// console.log(merge(nums1, m, nums2, n));  // Output: [1, 2, 2, 3, 5, 6]

var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  // Output: [1, 2, 2, 3, 5, 6]