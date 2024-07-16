function ArrayChallenge(strArr) {
    let childParentMap = {}; // Maps each child to its parent
    let parentChildrenMap = {}; // Maps each parent to its children

    strArr.forEach(pair => {
        let [child, parent] = pair.match(/\d+/g).map(Number);
        // Ensure a child has only one parent
        if (childParentMap[child]) return "false";
        childParentMap[child] = parent;

        if (!parentChildrenMap[parent]) parentChildrenMap[parent] = [];
        parentChildrenMap[parent].push(child);
    });

    // Ensure no parent has more than two children
    for (let parent in parentChildrenMap) {
        if (parentChildrenMap[parent].length > 2) return "false";
    }

    // Find the root (a node that is not a child)
    let allChildren = new Set(Object.keys(childParentMap).map(Number));
    let potentialRoots = Object.keys(parentChildrenMap).map(Number).filter(parent => !allChildren.has(parent));
    if (potentialRoots.length !== 1) return "false"; // There must be exactly one root

    // Check if the tree is fully connected and without cycles
    let visited = new Set();
    function dfs(node) {
        if (visited.has(node)) return false; // Found a cycle
        visited.add(node);
        if (parentChildrenMap[node]) {
            for (let child of parentChildrenMap[node]) {
                if (!dfs(child)) return false;
            }
        }
        return true;
    }

    if (!dfs(potentialRoots[0])) return "false"; // Check for cycles starting from the root

    // Ensure all nodes are visited (tree is connected)
    if (visited.size !== Object.keys(childParentMap).length + 1) return "false"; // +1 for the root

    return "true";
}

// Example test cases
console.log(ArrayChallenge(["(1,2)", "(2,4)", "(7,2)"])); 
console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])); 