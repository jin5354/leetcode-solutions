// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

// dp
// O(n²)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // dp
  // O(n^2)
  // 状态转移方程： dp[i] = max(1, dp[j] + 1) j ∈ [0, i - 1] 且 nums[j] < nums[i]

  let dp = []
  let len = nums.length

  // edge case
  if(len === 0 || len === 1) {
    return len
  }

  for(let i = 0; i < len; i++) {
    let tmpMax = 0
    // 求出最大的符合条件的 dp[j]
    for(let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        tmpMax = Math.max(dp[j], tmpMax)
      }
    }
    dp[i] = Math.max(1, tmpMax + 1)
  }

  return Math.max.apply(undefined, dp)
};