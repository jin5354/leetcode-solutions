// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// sort & Two pointer to unique

// Time complexity : O(n^2)
// Space complexity : O(1). Constant extra space is used.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  let len = nums.length
  nums.sort((a, b) => a - b)
  if(nums.length < 3) {
    return result
  }
  for(let i = 0; i < len - 2; i++) {
    if(nums[i] > 0) {
      return result
    }
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let j = i + 1
    let k = len - 1
    while(j !== k && j < k) {
      if(j - i > 1 && nums[j] === nums[j-1]) {
        j++
        continue
      }
      if(len - k > 1 && nums[k] === nums[k+1]) {
        k--
        continue
      }

      let sum = nums[i] + nums[j] + nums[k]
      if(sum === 0) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
      }else if(sum > 0) {
        k--
      }else {
        j++
      }
    }
  }

  return result
};