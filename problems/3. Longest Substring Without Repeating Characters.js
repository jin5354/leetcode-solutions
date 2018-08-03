// Given a string, find the length of the longest substring without repeating characters.

// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Sliding Window

// Time complexity : O(n). Index jj will iterate nn times.

// Space complexity : O(m). m is the size of the charset.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = {}
  let head = 0
  let end = 0
  let max = 0
  let len = s.length

  while(end <= len) {
    let char = s[end]
    if(map[char] === undefined || map[char] < head) {
      map[char] = end
      end++
      if(end === len) {
        max = Math.max(max, end - head)
      }
    }else {
      max = Math.max(max, end - head)
      head = map[char] + 1
      map[char] = end
      end++
    }
  }

  return max
};