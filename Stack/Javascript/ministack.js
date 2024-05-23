// Design a stack class that supports the push, pop, top, and getMin operations.

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in 
// 𝑂
// (
// 1
// )
// O(1) time.

// Example 1:

// Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

// Output: [null,null,null,null,0,null,2,1]

// Explanation:
// MinStack minStack = new MinStack();
// minStack.push(1);
// minStack.push(2);
// minStack.push(0);
// minStack.getMin(); // return 0
// minStack.pop();
// minStack.top();    // return 2
// minStack.getMin(); // return 1
// Constraints:

// -2^31 <= val <= 2^31 - 1.
// pop, top and getMin will always be called on non-empty stacks.

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (val < this.minStack[this.minStack.length - 1] || this.minStack.length == 0 ) {
            this.minStack.push(val)
        }
    }
  
    pop() {
        let popValue = this.stack.pop();
        if (popValue === this.minStack[this.minStack.length - 1]){
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
   
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

let minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack);

console.log(minStack.getMin()); // return 0
minStack.pop();
console.log(minStack);

console.log(minStack.top());    // return 2
console.log(minStack.getMin()); // return 1
