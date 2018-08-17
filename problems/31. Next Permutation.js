// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

// Single Pass Approach
// https://leetcode.com/problems/next-permutation/solution/

// Time complexity : O(n). In worst case, only two scans of the whole array are needed.
// Space complexity : O(1). No extra space is used. In place replacements are done.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length
  let target
  let min

  for(let i = len - 2; i >= 0; i--) {
    if(nums[i] < nums[i + 1]) {
      target = i
      break
    }
  }

  for(let i = target + 1; i < len; i++) {
    if(nums[i] > nums[target] && nums[i] < (nums[min] || Infinity)) {
       min = i
    }
  }
  if(target !== undefined) {
    let tmp = nums[min]
    nums[min] = nums[target]
    nums[target] = tmp
    if(len - target > 2) {
      nums.splice(target + 1, 0, ...nums.splice(target + 1, len - target + 1).sort((a, b) => a - b))
    }
  }else {
    nums.sort((a, b) => a - b)
  }
};