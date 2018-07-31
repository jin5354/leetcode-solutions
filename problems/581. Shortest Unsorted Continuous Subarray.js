// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

// Time complexity : O(n). Four O(n) loops are used.
// Space complexity : O(1). Constant space is used.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let min
  let max
  let len = nums.length
  let desing = false

  if(!nums.length) {
    return 0
  }
  for(let i = 0; i < len; i++) {
    if(!i) continue
    if(nums[i] < nums[i - 1] && !desing) {
      if(!max || nums[i - 1] > max.val) {
        max = {
          val: nums[i - 1],
          index: i - 1
        }
      }
      desing = true
    }
    if(nums[i] > nums[i - 1] && desing) {
      if(!min || nums[i - 1] < min.val) {
        min = {
          val: nums[i - 1],
          index: i - 1
        }
      }
      desing = false
    }
  }

  if(desing) {
    if(!min || nums[len - 1] < min.val) {
      min = {
        val: nums[len - 1],
        index: nums.length - 1
      }
    }
  }

  if(!min && !max) {
    return 0
  }else {
    let left = right = 0
    for(let i = 0; i < len; i++) {
      if(nums[i] > min.val) {
        left = i
        break
      }
    }
    for(let i = len - 1; i > 0; i--) {
      if(nums[i] < max.val) {
        right = i
        break
      }
    }
    return right - left + 1
  }
};