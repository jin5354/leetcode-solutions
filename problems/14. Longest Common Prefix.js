// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:

// All given inputs are in lowercase letters a-z.

// Vertical scanning
// Time complexity : O(S), where S is the sum of all characters in all strings.
// Space complexity : O(1), We only used constant extra space.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonPrefix = ''
  if(strs.length) {
   for(let i = 0, len = strs[0].length; i < len; i++) {
      let target = strs[0].slice(0, i + 1)
      if(strs.every(e => e.startsWith(target))) {
        commonPrefix = target
      }else {
        return commonPrefix
      }
    }
  }
  return commonPrefix
}