/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    let toZero = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                toZero.push([i, j]);
            }
        }
    }

    for (let i = 0; i < toZero.length; i++) {
        let row = toZero[i][0];
        let col = toZero[i][1];

        // Set entire row to zero
        for (let j = 0; j < matrix[row].length; j++) {
            matrix[row][j] = 0;
        }

        // Set entire column to zero
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col] = 0;
        }
    }

    // for (let t = 0; t < toZero.length; t++) {
    //     for (let i = 0; i < matrix.length; i++) {
    //         for (let j = 0; j < matrix[i].length; j++) {
    //             if (i === toZero[t][0] || j === toZero[t][1]) {
    //                 matrix[i][j] = 0;
    //             }
    //         }
    //     }
    // }
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);
console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]

matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix);
console.log(matrix); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]