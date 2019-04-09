// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// dfs + memo

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  let hashMap = {}
  let rowLen = grid.length
  // edge case
  if(rowLen === 0) {
    return 0
  }
  let columnLen = grid[0].length
  if(columnLen === 0) {
    return 0
  }

  // dfs + memo

  function dfs(i, j, isRoot) {
    // 终止条件
    // i j 不合法
    if(i < 0 || j < 0 || i >= rowLen || j >= columnLen) {
      return
    }
    // 遇到 0
    if(grid[i][j] == 0) {
      return
    }
    // hashMap 发现已有归属，已走过
    if(hashMap[`${i}-${j}`]) {
      return
    }
    // 是root
    if(isRoot) {
      // 遇到新岛屿
      count++
    }
    // 记录当前格子的归属
    hashMap[`${i}-${j}`] = count

    // 继续dfs
    dfs(i + 1, j, false)
    dfs(i - 1, j, false)
    dfs(i, j + 1, false)
    dfs(i, j - 1, false)
  }

  for(let i = 0; i < rowLen; i++) {
    for(let j = 0; j < columnLen; j++) {
      dfs(i, j, true)
    }
  }

  return count
};