let push = (stack, Max, elementToPush) => {

    currentSize = stack.length;

    if (currentSize >= Max) {
        console.log("Stack Overflow");
    } else {
        stack[currentSize] = elementToPush;
        console.log("Pushed Element is " + elementToPush);
    }
}

let pop = (stack) => {

    currentSize = stack.length;

    if (currentSize === 0) {
        console.log("Stack Underflow");
    } else {
        console.log("Popped Element is " + stack[currentSize - 1]);
        currentSize = currentSize - 1;
        stack.length = currentSize;
    }
}

let display = (stack) => {
    currentSize = stack.length;

    if (currentSize === 0) {
        console.log("Stack is Empty");
    } else {
        console.log("Stack Elements are: ");
        for (let i = 0; i < currentSize; i++) {
            console.log(stack[i]);
        }
    }
}

let stack = [];
let MaxStackSize = 5;

push(stack, MaxStackSize, 1);
push(stack, MaxStackSize, 2);
push(stack, MaxStackSize, 3);
push(stack, MaxStackSize, 4);
push(stack, MaxStackSize, 5);
pop(stack);
push(stack, MaxStackSize, 6);
display(stack);