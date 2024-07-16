let enQueue = (queue, MaxQueueSize, elementToEnque) => {

    currentSize = queue.length;

    if (currentSize >= MaxQueueSize) {
        console.log("Queue Overflow");
    } else {
        queue[currentSize] = elementToEnque;
        console.log("Enqueued Element is " + elementToEnque);
    }
}

let deQueue = (queue) => {

    console.log("Dequeued Element is " + queue[0]);

    if (isEmpty()) {
        console.log("Queue Underflow");
    } else {

        for (let i = 0; i < currentSize - 1; i++) {
            queue[i] = queue[i + 1];
        }
        currentSize--;
        queue.length = currentSize;

    }
}

let displayQueue = (queue) => {

    if (isEmpty()) {
        console.log("Queue is Empty");
    } else {
        console.log("Queue Elements are: ");
        // for (let i = 0; i < currentSize; i++) {
        //     console.log(queue[i]);
        // }
        console.log(queue.reverse());
    }
}

let front = (queue) => {
    if (isEmpty()) {
        console.log("Queue is Empty");
    } else {
        console.log("Front Element is " + queue[0]);
    }
}

let rear = (queue) => {
    if (isEmpty()) {
        console.log("Queue is Empty");
    } else {
        console.log("Rear Element is " + queue[queue.length - 1]);
    }
}

let isEmpty = () => {

    currentSize = queue.length;

    if (currentSize <= 0) {
        return true;
    } {
        return false;
    }
}

let queue = [];
enQueue(queue, 5, 6);
enQueue(queue, 5, 7);
enQueue(queue, 5, 8);
enQueue(queue, 5, 9);
enQueue(queue, 5, 2);
deQueue(queue);
rear(queue);
front(queue);
displayQueue(queue); 