class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isTreeEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isTreeEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search an node
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(root, value) {
        if (root === null) {
            return false;
        }

        if (value < root.value) {
            return this.searchNode(root.left, value);
        } else if (value > root.value) {
            return this.searchNode(root.right, value);
        } else {
            return true;
        }
    }

    // Preorder traversal
    preorder() {
        this.preorderNode(this.root);
    }

    preorderNode(node) {
        if (node) {
            console.log(node.value);
            this.preorderNode(node.left);
            this.preorderNode(node.right);
        }
    }

    // Inorder traversal
    inorder() {
        this.inorderNode(this.root);
    }

    inorderNode(node) {
        if (node) {
            this.inorderNode(node.left);
            console.log(node.value);
            this.inorderNode(node.right);
        }
    }

    // Postorder traversal
    postorder() {
        this.postorderNode(this.root);
    }

    postorderNode(node) {
        if (node) {
            this.postorderNode(node.left);
            this.postorderNode(node.right);
            console.log(node.value);
        }
    }

    // BFS Traversal
    bfs() {
        const queue = [];
        const result = [];
        if (this.root) queue.push(this.root);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        console.log(result);
    }

    // Min value
    min(currentNode) {
        if (currentNode === null) {
            return null;
        }
        // let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    // Max value
    max(currentNode) {
        if (currentNode === null) {
            return null;
        }
        // let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    // Remove a node
    remove(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return null;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);

        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);

        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}

const bst = new BST();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);

// console.log(bst.search(5));

// bst.preorder();
// bst.inorder();
// bst.postorder();
bst.bfs();
bst.remove(5)
bst.bfs();
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

console.log(bst);