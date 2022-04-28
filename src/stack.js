const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
    return this.count - 1;
  }

  pop() {
   if(this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -=1;
    return deleteItem;
  }

  peek() {
  return this.items[this.count - 1]
  }
}

module.exports = {
  Stack
};
