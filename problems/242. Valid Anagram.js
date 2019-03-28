// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// sort O(nlogn)
// hashmap O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hashMap = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  for(let i = 0, len = s.length; i < len; i++) {
    hashMap[s[i].charCodeAt() - 97]++
  }
  for(let i = 0, len = t.length; i < len; i++) {
    hashMap[t[i].charCodeAt() - 97]--
  }

  return hashMap.every(e => e===0)
}