// https://leetcode.com/problems/sudoku-solver/

// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.


// A sudoku puzzle...


// ...and its solution numbers marked in red.

// Note:

// The given board contain only digits 1-9 and the character '.'.
// You may assume that the given Sudoku puzzle will have a single unique solution.
// The given board size is always 9x9.

// dfs with backtracking
// O(9^m)

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

  // dfs
  function dfs(board) {

    // 找到最近的一个空位，填数字
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(board[i][j] === '.') {
          for(let k = 1; k <= 9; k++) {
            // 对于每个空位，尝试用 1-9 去填充，同时判断有效性（剪枝）
            if(isValid(board, i, j, k)) {
              board[i][j] = String(k)
              // dfs，若下层能找到 solution，返回 true，否则回溯
              if(dfs(board)) {
                return true
              }else {
                board[i][j] = '.' // backtracking
              }
            }
          }
          // 如果对于某条路，所有值都尝试过了，也无正确结果，向上层路 返回 false
          return false
        }
      }
    }

    // 终结条件。遍历完所有节点，没有空位，走到这里，找到 solution。
    return true
  }

  // 判定在某个空格填数是否有效
  function isValid(board, row, column, value) {
    // 横竖排不能重
    for(let i = 0; i < 9; i++) {
      if(board[row][i] == value) return false
      if(board[i][column] == value) return false
    }
    // subbox 不能重
    let subboxRow = parseInt(row / 3)
    let subboxColumn = parseInt(column / 3)
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(board[subboxRow*3 + i][subboxColumn*3 + j] == value) return false
      }
    }
    return true
  }

  dfs(board)

  return board
};