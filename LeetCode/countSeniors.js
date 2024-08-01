/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {

    let age, count = 0;
    for (let i = 0; i < details.length; i++) {
        age = Number(details[i].substring(11, 13));
        console.log(age);

        if (age > 60) {
            count++;
        }
    }

    return count;
};

// Test cases
console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])); 
