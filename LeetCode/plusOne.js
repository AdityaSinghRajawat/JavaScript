var plusOne = function (digits) {
    let num = BigInt(digits.join("")) + 1n;
    result = String(num).split("").map((e) => {
        return parseInt(e);
    })
    return result;
};

let digits = [1, 2, 3];
console.log(plusOne(digits)); 

