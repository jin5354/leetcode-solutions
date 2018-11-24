// https://leetcode.com/problems/unique-paths/description/
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 7 x 3 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // 概率论  m-1 个黑球和 n-1 个白球放一起，有几种排列
  // 全排列(m + n - 2) / (全排列(m - 1) * 全排列(n - 1))
  // 算阶乘，180 以上就是 Infinity 了，自己优化成c，不要乘出太大的数

  if(m <= 1 || n <= 1) {
    return 1
  }

  function c(max, min) {
    if(max === min) {
      return min
    }
    return max * c(max - 1, min)
  }

  let bigger, another
  if(m > n) {
    bigger = m - 1
    another = n - 1
  }else {
    bigger = n - 1
    another = m - 1
  }

  return c(m + n - 2, bigger + 1) / c(another, 1)
};