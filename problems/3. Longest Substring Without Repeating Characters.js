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
  //dp
  //状态定义 dp[i] = 以s[i] 为结尾的最长子序列
  //同时使用一个 hashmap 来存储当前最长子序列的各个字母及位置
  //如果 s[i] 和 dp[i-1] 的最长子序列没有重复
  //dp[i] = dp[i - 1] + 1, hashmap add s[i]-i
  //如果有重复
  //dp[i] = i - hashmap[nums[i]], hashmap 移除所有 value 小于 hashmap[nums[i]] 的元素
  //O(n)

  let dp = []
  let len = s.length
  let hashMap = {}
  let max = 0
  let start = 0

  // edge case
  if(len === 0) {
    return 0
  }

  // init
  dp[0] = 1
  hashMap[s[0]] = 0
  max = 1

  for(let i = 1; i < len; i++) {
    if(hashMap[s[i]] === undefined) {
      dp[i] = dp[i - 1] + 1
    }else {
      let prevIndex = hashMap[s[i]]
      dp[i] = i - prevIndex
      for(let j = start; j <= prevIndex; j++) {
        delete hashMap[s[j]]
      }
      start = prevIndex + 1
    }
    hashMap[s[i]] = i
    max = Math.max(max, dp[i])
  }

  return max
};