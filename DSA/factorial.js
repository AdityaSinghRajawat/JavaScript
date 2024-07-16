let factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let n = 7;

console.log("Factorial of " + n + " is " + factorial(n));