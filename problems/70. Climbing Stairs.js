// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Approach 1: Brute Force
// Time complexity : O(2^n). Size of recursion tree will be 2^n.
// Space complexity : O(n). The depth of the recursion tree can go upto n.

// Approach 2: Recursion with memorization
// Time complexity : O(n). Size of recursion tree can go upto n.
// Space complexity : O(n). The depth of recursion tree can go upto n.

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let cache = []
  function climb(i) {
    if(i === 0 || i === 1) {
      return 0
    }else if(cache[i] > 0) {
      return cache[i]
    }else {
      cache[i] = 1 + climb(i-1) + climb(i-2)
      return cache[i]
    }
  }
  return 1 + climb(n)
};

// Approach 4: Fibonacci Number
// One can reach i step in one of the two ways:
// Taking a single step from i-1 step.
// Taking a step of 2 from i-2 step.
// So, the total number of ways to reach i is equal to sum of ways of reaching i-1 step and ways of reaching i-2 step.

// public class Solution {
//   public int climbStairs(int n) {
//       if (n == 1) {
//           return 1;
//       }
//       int first = 1;
//       int second = 2;
//       for (int i = 3; i <= n; i++) {
//           int third = first + second;
//           first = second;
//           second = third;
//       }
//       return second;
//   }
// }

// dp

var climbStairs = function(n) {
  // dp
  let result = []
  result[1] = 1
  result[2] = 2
  for(let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result[n]
};