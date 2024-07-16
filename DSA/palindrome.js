const palindrome = (str) => {

    let start = 0, end = str.length - 1

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(palindrome("level"));