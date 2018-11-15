// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// Time complexity : O(strs.length * max str length)
// Space complexity : O(strs.length)

// if use sort, Time complexity : O(strs.length * nlogn)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hashMap = {}
  let result = []

  strs.forEach(str => {
    let hash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i <str.length; i++) {
      hash[str[i].charCodeAt() - 97]++
    }
    hash = hash.join(',')
    if(!hashMap[hash]) {
      hashMap[hash] = [str]
    }else {
      hashMap[hash].push(str)
    }
  })

  for(let key in hashMap) {
    result.push(hashMap[key])
  }

  return result
};