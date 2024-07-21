majorityElement = function (A) {

    let obj = {};

    for (let a of A) {
        obj[a] = obj[a] ? obj[a] + 1 : 1
    }

    let max = 0;
    let maxElement;
    for (ele in obj) {
        if (obj[ele] > max) {
            max = obj[ele];
            maxElement = ele;
        }
    }

    return maxElement;
}

console.log(majorityElement([2, 1, 2, 1, 1, 2, 2, 1, 1]));