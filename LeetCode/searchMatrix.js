/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let rowToSearch = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][matrix[i].length - 1] >= target) {
            rowToSearch = i;
            break;
        }
    }

    let left = 0;
    let right = matrix[rowToSearch].length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (matrix[rowToSearch][mid] === target) {
            return true;
        } else if (matrix[rowToSearch][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // for (let j = 0; j < matrix[rowToSearch].length; j++) {
    //     if (matrix[rowToSearch][j] === target) return true;
    // }

    return false;
};

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
console.log(searchMatrix(matrix, 3)); // Output: true
console.log(searchMatrix(matrix, 13)); // Output: false