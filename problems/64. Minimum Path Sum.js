// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


// Dijkstra
// DP problem

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let n = grid.length
  if(!n) {
    return 0
  }
  let m = grid[0].length
  let minResult = []
  for(let i = 0; i < n; i++) {
    let init = []
    for(let j = 0; j < m; j++) {
      init.push(Infinity)
    }
    minResult.push(init)
  }

  minResult[0][0] = grid[0][0]

  // Dijkstra
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      let item = grid[i][j]
      if(i < n - 1) {
        minResult[i + 1][j] = Math.min(minResult[i + 1][j], minResult[i][j] + grid[i + 1][j])
      }
      if(j < m - 1) {
        minResult[i][j + 1] = Math.min(minResult[i][j + 1], minResult[i][j] + grid[i][j + 1])
      }
    }
  }
  return minResult[n - 1][m - 1]
};