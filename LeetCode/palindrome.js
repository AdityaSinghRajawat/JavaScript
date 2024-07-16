var isPalindrome = function (x) {
    let str = x.toString();
    let reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121));


