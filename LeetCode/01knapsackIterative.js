let knapsack = (wt, val, W, n) => {

    let t = new Array(n + 1).fill().map(() => new Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= W; j++) {

            if (wt[i - 1] <= j) {
                t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
            } else {
                t[i][j] = t[i - 1][j];
            }
        }
    }

    return t[n][W];
}

let wt = [1, 3, 4, 5];
let val = [1, 4, 5, 7];

let W = 7;
let n = wt.length;
console.log(knapsack(wt, val, W, n)); // Output: 9