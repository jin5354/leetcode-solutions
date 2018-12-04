// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


// interesting

// 递归可以有更好的写法：
// 当出现分支条件，分支有限（本题固定4个方向分支）时，可以不写 foreach 这种，写 A || B || C || D 可以大幅减少代码量
// 数组中用过的元素不能再次使用，可以使用替换方式，这样都不用额外使用缓存：比如字符 'A' 元素使用后替换为 65，不再使用该元素时，再从 65 还原回 'A'

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board[0].length
  let n = board.length
  let len = word.length

  let result = false

  function exist(i, j, wordIndex) {
    if(wordIndex === len) {
      return true
    }
    if(i >= m || i < 0 || j >= n || j < 0) {
      return false
    }
    if(board[j][i] !== word[wordIndex]) {
      return false
    }else {
      board[j][i] = board[j][i].charCodeAt()
    }
    let result = exist(i+1, j, wordIndex + 1) || exist(i-1, j, wordIndex + 1) || exist(i, j+1, wordIndex + 1) || exist(i, j-1, wordIndex + 1)
    if(result) {
      return true
    }else {
      board[j][i] = String.fromCharCode(board[j][i])
      return false
    }
  }

  for(let j = 0; j < n; j++) {
    for(let i = 0; i < m; i++) {
      if(exist(i, j, 0)) {
        return true
      }
    }
  }

  return false
};