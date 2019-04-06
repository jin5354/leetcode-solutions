// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example:

// Input:
// board = [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// words = ["oath","pea","eat","rain"]

// Output: ["eat","oath"]

// dfs + backtracking + trie

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  // 去重
  let result = new Set()

  if(board === null || board.length === 0 || words.length === 0) {
    return []
  }

  let rowLen = board.length
  let columnLen = board[0].length

  // trie + dfs + backtracking

  // 首先使用 hashmap 构建字典树
  let trie = {}

  function addWord(word) {
    let node = trie
    for(let i = 0, len = word.length; i < len; i++) {
      if(node[word[i]] === undefined) {
        node[word[i]] = {}
      }
      node = node[word[i]]
    }
    // 结尾标记
    node.end = true
  }

  for(let i = 0, len = words.length; i < len; i++) {
    addWord(words[i])
  }

  // dfs

  function dfs(i, j, sub, node) {
    // 找到 end，说明有词符合条件，添加
    if(node.end) {
      result.add(sub)
    }
    // 终止条件
    // i j 不合法
    if(i < 0 || j < 0 || i >= rowLen || j >= columnLen) {
      return false
    }

    // 字符不匹配
    if(node[board[i][j]] === undefined) {
      return false
    }

    // 防止往回找，出现重复利用同一格子的情况，将用过的置为 .
    let tmp = board[i][j]
    board[i][j] = '.'

    // 继续dfs
    dfs(i + 1, j, sub + tmp, node[tmp])
    dfs(i - 1, j, sub + tmp, node[tmp])
    dfs(i, j + 1, sub + tmp, node[tmp])
    dfs(i, j - 1, sub + tmp, node[tmp])

    // 回溯
    board[i][j] = tmp
  }

  for(let i = 0; i < rowLen; i++) {
    for(let j = 0; j < columnLen; j++) {
      dfs(i, j, '', trie)
    }
  }

  return Array.from(result)
};