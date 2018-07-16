// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle) {
    return 0
  }
  if(!haystack || needle.length > haystack.length) {
    return -1
  }
  let result = -1
  for(let i = 0, len = haystack.length - needle.length; i <= len; i++) {
    for(let j = 0, len2 = needle.length; j < len2; j++) {
      if(needle.charAt(j) !== haystack.charAt(i + j)) {
        break
      }
      if(j + 1 === len2) {
        return i
      }
    }
  }

  return result
};