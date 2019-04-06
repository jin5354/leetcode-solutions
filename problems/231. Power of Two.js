// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */

// bit operation
// n & (n - 1) 清空最后一位 1

var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0
};