
//   Definition for a _Node.
function _Node(val, children) {
    this.val = val;
    this.children = children;
};

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) return [];

    let queue = [root];
    let result = []

    while (queue.length > 0) {

        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            currentNode = queue.shift();
            currentLevel.push(currentNode.val)

            for (let child of currentNode.children) {
                queue.push(child);
            }

        }
        result.push(currentLevel);
    }
    return result;
};

let root = new _Node(1, [new _Node(3, [new _Node(5, []), new _Node(6, [])]), new _Node(2, []), new _Node(4, [])]);
console.log(levelOrder(root)); // [[1],[3,2,4],[5,6]]