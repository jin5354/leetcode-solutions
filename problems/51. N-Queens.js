// https://leetcode.com/problems/n-queens/

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Example:

// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

// dfs

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let result = []

  // 深度优先遍历
  function dfs(sub, exists) {
    // 得出该层
    let level = exists.length

    // 递归终止
    if(level >= n) {
      result.push(sub)
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
      let cloneSub = sub.slice()
      let cloneExists = exists.slice()
      let current = new Array(n).fill('.')
      current[i] = 'Q'
      current = current.join('')
      cloneSub.push(current)
      cloneExists[level] = i
      dfs(cloneSub, cloneExists)
    }
  }

  dfs([], [])

  return result
};