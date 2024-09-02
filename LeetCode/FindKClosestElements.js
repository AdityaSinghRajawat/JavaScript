/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    let i = arr.length - 1, j = arr.length - 1;

    while (i >= 0) {

        if (j - i + 1 < k) {
            i--

        } else if (j - i + 1 === k) {
            if (Math.abs(arr[i - 1] - x) <= Math.abs(arr[j] - x)) {
                i--;
                j--;

            } else {
                return arr.slice(i, j + 1);
            }
        }
    }
    return arr.slice(i, j + 1);
};

let arr = [1,2,3,4,5], k = 4, x = 3;
console.log(findClosestElements(arr, k, x));

