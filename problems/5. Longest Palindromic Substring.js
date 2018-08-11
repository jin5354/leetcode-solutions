// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// Expand Around Center
// Time complexity : O(n^2). Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n^2).

// Space complexity : O(1).


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = ''
  let count = 0
  let sLen = s.length
  for(let i = 0; i < sLen; i++) {
    let currentLen = 1
    let i2 = 1
    while(i - i2 >= 0 && i + i2 <= sLen) {
      if(s[i - i2] === s[i + i2]) {
        currentLen +=2
        i2++
      }else {
        break
      }
    }
    if(currentLen > count) {
      count = currentLen
      max = s.slice(i - i2 + 1, i + i2)
    }

    currentLen = 0
    i2 = 1

    while(i - i2 + 1 >= 0 && i + i2 <= sLen) {
      if(s[i - i2 + 1] === s[i + i2]) {
        currentLen +=2
        i2++
      }else {
        break
      }
    }
    if(currentLen > count) {
      count = currentLen
      max = s.slice(i - i2 + 2, i + i2)
    }
  }

  return max
};