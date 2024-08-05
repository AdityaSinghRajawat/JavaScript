/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    if (numRows === 1 || numRows >= s.length) return s;

    let rows = new Array(numRows).fill('');

    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;

    }

    return rows.join('');
};

let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows));