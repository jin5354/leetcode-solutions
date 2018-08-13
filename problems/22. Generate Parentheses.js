// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// Backtracking

// Time Complexity : O(4^n/Math.sqrt(n)). Each valid sequence has at most n steps during the backtracking procedure.

// Space Complexity : O(4^n/Math.sqrt(n)), as described above, and using O(n) space to store the sequence.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []

  function _walk(exist, restL, restR, count) {
    if(count < 0) return
    if(restL === 0 && restR === 0) {
      result.push(exist)
    }
    if(restL >= 1) {
      _walk(exist + '(', restL - 1, restR, count + 1)
    }
    if(restR >= 1) {
      _walk(exist + ')', restL, restR - 1, count - 1)
    }
  }

  _walk('(', n-1, n, 1)
  return result
};