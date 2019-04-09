// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // dp
  // O(mn)
  // https://leetcode.com/problems/edit-distance/discuss/25846/C%2B%2B-O(n)-space-DP

  let dp = []
  let len1 = word1.length
  let len2 = word2.length

  // 状态转移方程
  // dp[i][j] 为 word1 前i个字符 转换到 word2 前j个字符的最小编辑距离
  // if word1[i] === word2[j] dp[i][j] = dp[i - 1][j - 1]
  // else dp[i][j] = min(if replace, if insert, ifdelete)
  // if replace: dp[i][j] = dp[i-1][j-1] + 1
  // if insert: dp[i][j] = dp[i][j - 1] + 1
  // if delete: dp[i][j] = dp[i-1][j] + 1

  // init
  for(let i = 0; i < len1 + 1; i++) {
    dp[i] = [i]
    if(i === 0) {
      for(let j = 0; j < len2 + 1; j++) {
        dp[i][j] = j
      }
    }
  }

  // start dp
  for(let i = 1; i < len1 + 1; i++) {
    for(let j = 1; j < len2 + 1; j++) {
      if(word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i][j - 1] + 1, dp[i - 1][j] + 1)
      }
    }
  }

  return dp[len1][len2]
};