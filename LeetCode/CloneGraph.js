/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    let cloneNodes = new Map();

    let clone = (node) => {
        if (cloneNodes.has(node.val)) {
            return cloneNodes.get(node.val);
        }

        let newNode = new _Node(node.val, []);
        cloneNodes.set(node.val, newNode);

        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(clone(neighbor));
        }

        return newNode;
    };

    return clone(node);
};
