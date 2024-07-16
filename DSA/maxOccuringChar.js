const maxOccuringChar = (str) => {

    let strobj = {};
    let maxkey = "";

    for (let i = 0; i < str.length; i++) {
        // obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
        key = str[i];
        if (!strobj[key]) {
            strobj[key] = 0;
        }
        strobj[key]++;

        if (maxkey == "" || strobj[key] > strobj[maxkey]) {
            maxkey = key;
        }
    }

    return maxkey;
}

console.log(maxOccuringChar("p ee ooo i"));