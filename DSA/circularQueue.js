class Queue {

    constructor(max) {
        this.max = max;
        this.queue = new Array(max);
        this.currentSize = 0;
        this.front = this.rear = -1;
    }

    enQueue(data) {
        if ((this.front == 0 && this.rear == this.max - 1) || (this.rear == (this.front - 1) % (this.max - 1))) {
            console.log("Queue is Full");
        } else if (this.front == -1) {
            this.front = this.rear = 0;
            this.queue[this.rear] = data;
            this.currentSize++;
        } else if (this.rear == this.max - 1 && this.front != 0) {
            this.rear = 0;
            this.queue[this.rear] = data;
            this.currentSize++;
        } else {
            this.rear++;
            this.queue[this.rear] = data;
            this.currentSize++;
        }
    }

    deQueue() {
        if (this.front == -1) {
            console.log("Queue is Empty");
        } else {
            console.log("Dequeued Element is " + this.queue[this.front]);
            this.queue[this.front] = null;
            if (this.front == this.rear) {
                this.front = this.rear = -1;
            } else if (this.front == this.max - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        }
    }

    display() {
        if (this.front == -1) {
            console.log("Queue is Empty");
        } else {
            console.log("Queue Elements are: ");
            let i = this.front;
            while (i != this.rear) {
                console.log(this.queue[i]);
                i = (i + 1) % this.max;
            }
            console.log(this.queue[i]);
        }
    }

}

let queue = new Queue(5);
queue.enQueue('A');
queue.enQueue('B');
queue.enQueue('C');
queue.enQueue('D');
queue.enQueue('E');
console.log("Displaying elements using display() method");
queue.display();

queue.deQueue();
queue.deQueue();
console.log("\n\nAfter Dequeueing two elements");
queue.display();


