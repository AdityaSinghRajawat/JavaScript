var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // Move all elements except the last one from queue1 to queue2
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    // The last element in queue1 is the top of the stack
    const poppedElement = this.queue1.shift();
    // Swap the roles of queue1 and queue2
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    // Move all elements except the last one from queue1 to queue2
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    // The last element in queue1 is the top of the stack
    const topElement = this.queue1[0];
    // Move the last element to queue2
    this.queue2.push(this.queue1.shift());
    // Swap the roles of queue1 and queue2
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let obj = new MyStack()
obj.push(1)
obj.push(2)
console.log(obj.top());   // return 2
console.log(obj.pop());   // return 2
console.log(obj.empty()); // return false
