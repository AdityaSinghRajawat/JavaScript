let t = new Array(102).fill().map(() => new Array(1002).fill(-1));

let knapsack = (wt, val, W, n) => {

    if (n === 0 || W === 0) {
        return 0;
    }

    if (t[W][n] !== -1) {
        return t[W][n];
    }

    if (wt[n - 1] <= W) {
        t[W][n] = Math.max(val[n - 1] + knapsack(wt, val, W - wt[n - 1], n - 1), knapsack(wt, val, W, n - 1));
    }

    if (wt[n - 1] > W) {
        t[W][n] = knapsack(wt, val, W, n - 1);
    }

    return t[W][n];

}

let wt = [1, 3, 4, 5];
let val = [1, 4, 5, 7];
let W = 7;
let n = wt.length;
console.log(knapsack(wt, val, W, n));