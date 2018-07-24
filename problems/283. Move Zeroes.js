// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Space Complexity : O(1). Only constant space is used.

// Time Complexity: O(n). However, the total number of operations are still sub-optimal. The total operations (array writes) that code does is nn (Total number of elements).

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let notZeroPointer = 0
  nums.forEach(e => {
    if(e !== 0) {
      nums[notZeroPointer] = e
      notZeroPointer++
    }
  })
  for(let i = notZeroPointer, len = nums.length; i < len; i++) {
    nums[i] = 0
  }
};

// Space Complexity : O(1). Only constant space is used.

// Time Complexity: O(n). However, the total number of operations are optimal. The total operations (array writes) that code does is Number of non-0 elements.This gives us a much better best-case (when most of the elements are 0) complexity than last solution. However, the worst-case (when all elements are non-0) complexity for both the algorithms is same.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let notZeroPointer = 0
  nums.forEach((e, i) => {
    if(e !== 0) {
      nums[notZeroPointer] = e
      nums[i] = 0
      notZeroPointer++
    }
  })
};