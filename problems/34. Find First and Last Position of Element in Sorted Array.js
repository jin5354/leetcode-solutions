// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Binary Search

// Time complexity : O(logn)
// Space complexity : O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [-1, -1]

  let start = 0
  let end = nums.length - 1

  //先二分找目标
  while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    if(nums[mid] < target) {
      start = mid + 1
    }else if(nums[mid] > target) {
      end = mid - 1
    }else {
      result = [mid, mid]
      break
    }
  }

  if(result[0] !== -1) {
    //往前找头

    while(start < result[0]) {
      let mid = Math.floor((start + result[0] - 1) / 2)
      if(nums[mid] < target) {
        start = mid + 1
      }else {
        result[0] = mid
      }
    }

    //往后找尾

    while(end > result[1]) {
      let mid = Math.floor((result[1] + 1 + end) / 2)
      if(nums[mid] > target) {
        end = mid - 1
      }else {
        result[1] = mid
      }
    }
  }

  return result
};