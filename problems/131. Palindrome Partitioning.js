// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

// Example:

// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  // dfs + backtracking

  let result = []
  let tmp = []
  let len = s.length

  // 判断是不是回文
  function isPalindrome(str, start, end) {
    while(start <= end) {
      if(str[start] !== str[end]) {
        return false
      }
      start++
      end--
    }
    return true
  }

  function dfs(start) {
    // 终止条件
    if(start >= len) {
      result.push(tmp.slice())
      return
    }

    for(let i = start; i < len; i++) {
      if(isPalindrome(s, start, i)) {
        tmp.push(s.slice(start, i + 1))
        dfs(i + 1)
        tmp.pop()
      }
    }
  }

  dfs(0)

  return result
};