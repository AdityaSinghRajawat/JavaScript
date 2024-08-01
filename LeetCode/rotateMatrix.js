/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

};

// Test cases
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);
console.log(matrix); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]