const anagram = (str1, str2) => {

    obj = {}

    if (str1.length !== str2.length) return false;

    for (ch of str1) {
        obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
    }

    for (ch of str2) {
        if (!obj[ch]) {
            return false;
        }
        obj[ch]--;
    }

    return true;
}

let str1 = "listen";
let str2 = "silent";

console.log(anagram(str1, str2));


