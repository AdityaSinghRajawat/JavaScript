/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0];

    let adjacencyList = {};
    for (let [a, b] of edges) {
        if (!adjacencyList[a]) adjacencyList[a] = [];
        if (!adjacencyList[b]) adjacencyList[b] = [];

        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }

    let leaves = []
    for (let node in adjacencyList) {
        if (adjacencyList[node].length === 1) {
            leaves.push(parseInt(node));
        }
    }

    while (n > 2) {
        n -= leaves.length;

        const newLeaves = [];
        for (let leaf of leaves) {
            const neighbor = adjacencyList[leaf].pop();
            adjacencyList[neighbor].splice(adjacencyList[neighbor].indexOf(leaf), 1)

            if (adjacencyList[neighbor].length === 1) {
                newLeaves.push(neighbor)
            }
        }
        leaves = newLeaves;
    }

    return leaves;
};