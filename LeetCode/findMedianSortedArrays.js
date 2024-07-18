/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let i = 0, j = 0, k = 0;
    let arr = []

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            arr[k] = nums1[i];
            i++
        } else {
            arr[k] = nums2[j];
            j++
        }
        k++
    }

    while (i < nums1.length) {
        arr[k] = nums1[i]
        i++
        k++
    }
    while (j < nums2.length) {
        arr[k] = nums2[j]
        j++
        k++
    }

    if (arr.length % 2 === 0) {
        let mid = arr.length / 2
        return (arr[mid - 1] + arr[mid]) / 2
    } else {
        let mid = Math.floor(arr.length / 2)
        return arr[mid]
    }

};

let nums1 = [1, 2]
let nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))