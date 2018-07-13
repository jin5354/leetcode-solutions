// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true

// Example 2:

// Input: "()[]{}"
// Output: true

// Example 3:

// Input: "(]"
// Output: false

// Example 4:

// Input: "([)]"
// Output: false

// Example 5:

// Input: "{[]}"
// Output: true

// Time complexity : O(n)
// Space complexity : O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let elements = s.split('')
  let stack = []
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  elements.forEach(e => {
    stack.push(e)
    if(stack.length >= 2 && (e === ')' || e === '}' || e === ']') && stack[stack.length - 2] === map[e]) {
      stack.pop()
      stack.pop()
    }
  })
  return stack.length === 0
}