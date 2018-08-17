// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// same side
// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14435/Clever-idea-making-it-simple

// Time complexity : O(logn).
// Space complexity : O(1).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    let num
    if((nums[mid] < nums[0]) === (target < nums[0])) {
      num = nums[mid]
    }else {
      if(target < nums[0]) {
        num = -Infinity
      }else if(target > nums[0]) {
        num = Infinity
      }else {
        return 0
      }
    }

    if(target > num) {
      start = mid + 1
    }else if(target < num) {
      end = mid - 1
    }else {
      return mid
    }
  }

  return -1
};