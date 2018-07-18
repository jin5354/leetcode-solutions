// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

// Two Stack.
// Time complexity : O(1).
// Space complexity: O(n).

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.elements = []
  this.mins = []
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.elements.push(x)
  if(this.mins[0] === undefined || x <= this.getMin()) {
    this.mins.push(x)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if(this.elements[this.elements.length - 1] === this.getMin()) {
    this.mins.pop()
  }
  this.elements.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1]
};
/**
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/