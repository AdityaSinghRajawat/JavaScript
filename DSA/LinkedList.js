class LinkedList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // Add a new node at the end of the linked list
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Traverse the linked list
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }

    // Delete a node from the linked list 
    delete(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let currentNode = this.head;
        let counter = 1;
        while (counter < index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
    }

    // Insert a new node at the specified index
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }

        let currentNode = this.head;
        let counter = 1;
        while (counter < index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
    }

    // Search an node by value in the linked list
    searchByValue(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                console.log(currentNode);
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        console.log("Node not found");
        return null;
    }

    // Search an node by index in the linked list
    searchByIndex(index) {
        let currentNode = this.head;
        let counter = 1;
        while (currentNode) {
            if (counter === index) {
                console.log(currentNode);
                return currentNode;
            }
            currentNode = currentNode.next;
            counter++;
        }
        console.log("Node not found");
        return null;
    }

    // Reverse the linked list
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }
}

const l1 = new LinkedList(10)

l1.append(20)
l1.append(30)
l1.append(40)
l1.append(50)
l1.insert(3, 25)
// l1.traverse()
l1.searchByValue(40)
l1.searchByIndex(3)
// l1.delete(2)
// l1.traverse()

// l1.traverse()
// l1.reverse()
// l1.traverse()
console.log(l1)