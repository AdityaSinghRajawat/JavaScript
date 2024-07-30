/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    let keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let result = [];
    let current = [];

    if (digits.length === 0) return result;

    function backtrack(index) {
        if (index === digits.length) {
            result.push(current.join(''));
            return;
        }

        let letters = keyboard[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            current.push(letters[i]);
            backtrack(index + 1);
            current.pop();
        }
    }

    backtrack(0);

    return result;
};

console.log(letterCombinations("23")); 