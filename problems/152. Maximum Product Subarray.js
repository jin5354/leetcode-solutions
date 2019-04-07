// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // dp
  // 难点在于如何构思状态和状态转移方程
  // 维护两个数组，一个代表以i为结束的子集的最大乘积，一个代表最小乘积
  // 通过维护两个数组，即可在乘法受符号影响的情况下，依然用统一的状态转移方程解题
  // 对于，乘法，有符号，翻转符号，考虑用两个状态数组

  let min = []
  let max = []

  for(let i = 0, len = nums.length; i < len; i++) {
    // 如果是第一位，或者该数为 0，取本身
    if(i === 0 || nums[i] === 0) {
      min[i] = nums[i]
      max[i] = nums[i]
      continue
    }
    max[i] = Math.max(nums[i], nums[i] * min[i - 1], nums[i] * max[i - 1])
    min[i] = Math.min(nums[i], nums[i] * min[i - 1], nums[i] * max[i - 1])
  }

  return Math.max.apply(undefined, max)
};

// brute force
// O(n^2)

// var maxProduct = function(nums) {
//   let result = -Infinity

//   for(let i = 0, len = nums.length; i < len; i++) {
//     let base = nums[i]
//     result = Math.max(result, base)
//     for(let j = i + 1; j < len; j++) {
//       base *= nums[j]
//       result = Math.max(result, base)
//       if(base === 0) break
//     }
//   }

//   return result
// };