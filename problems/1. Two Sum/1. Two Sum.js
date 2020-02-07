// 1. Two Sum
// https://leetcode.com/problems/two-sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  // One-pass Hash Table

  // Complexity Analysis:
  // Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.
  // Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.

  var map = {}
  for(var i = 0, len = nums.length; i < len; i++) {
      var completion = target - nums[i]
      if(map[completion] !== undefined) {
          return [map[completion], i]
      }else {
          map[nums[i]] = i
      }
  }
}