// https://leetcode.com/problems/n-queens-ii/

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example:

// Input: 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

// dfs 可用跟 51 题相仿的解法

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let result = 0

  // 深度优先遍历
  function dfs(exists) {
    // 得出该层
    let level = exists.length

    // 递归终止
    if(level >= n) {
      result++
      return
    }

    // 得出该层禁用的格子
    let disabled = new Set()
    exists.forEach((e, i) => {
      // 针对每个已放置的棋子，算出导致的不可用位置
      disabled.add(e)
      disabled.add(e + level - i)
      disabled.add(e - level + i)
    })

    // 试图放置在各个位置
    for(let i = 0; i < n; i++) {
      // 如果是不可用位置，剪枝
      if(disabled.has(i)) continue
      let cloneExists = exists.slice()
      let current = new Array(n).fill('.')
      current[i] = 'Q'
      current = current.join('')
      cloneExists[level] = i
      dfs(cloneExists)
    }
  }

  dfs([])

  return result
};